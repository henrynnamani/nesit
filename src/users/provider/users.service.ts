import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dto/get-user.dto';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

/**
 * User connection class and business logic handling
 */
@Injectable()
export class UsersService {
  /** Injects Dependencies */
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) return;

    const user = this.userRepository.create(createUserDto);

    await this.userRepository.save(user);

    return user;
  }

  /** method returns all user */
  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'Henry',
        lastName: 'Nnamani',
      },
      {
        firstName: 'Gwen',
        lastName: 'Benjamin',
      },
    ];
  }

  /** Find an individual user */
  public async findUserbyId(id: number) {
    return await this.userRepository.findOneBy({ id });
  }
}
