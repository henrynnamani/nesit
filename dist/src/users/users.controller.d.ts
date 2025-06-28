import { UsersService } from './provider/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserParamDto } from './dto/get-user.dto';
import { ConfigService } from '@nestjs/config';
import { CreateManyUserDto } from './dto/create-many-user.dto';
export declare class UsersController {
    private readonly usersService;
    private configService;
    constructor(usersService: UsersService, configService: ConfigService);
    getUsers(getUserParamDto: GetUserParamDto, limit: number, page: number): void;
    createManyUser(createUsersDto: CreateManyUserDto): Promise<import("./user.entity").User[]>;
    createUser(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
}
