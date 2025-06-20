import { ConflictException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '../user.entity';
import { CreateManyUserDto } from '../dto/create-many-user.dto';

@Injectable()
export class UsersCreateManyProvider {
  constructor(private readonly dataSource: DataSource) {}
  public async createMany(createUsersDto: CreateManyUserDto) {
    let users: User[] = [];

    const queryRunner = this.dataSource.createQueryRunner();

    try {
      await queryRunner.connect();

      await queryRunner.startTransaction();
    } catch (err) {
      await queryRunner.release();
      throw new ConflictException('Error initiating transaction');
    }

    try {
      users = await Promise.all(
        createUsersDto?.users.map(async (user) => {
          let newUser = queryRunner.manager.create(User, user);

          return await queryRunner.manager.save(newUser);
        }),
      );

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    return users;
  }
}
