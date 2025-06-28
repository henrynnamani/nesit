import { DataSource } from 'typeorm';
import { User } from '../user.entity';
import { CreateManyUserDto } from '../dto/create-many-user.dto';
export declare class UsersCreateManyProvider {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    createMany(createUsersDto: CreateManyUserDto): Promise<User[]>;
}
