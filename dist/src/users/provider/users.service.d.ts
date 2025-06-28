import { GetUserParamDto } from '../dto/get-user.dto';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUserDto } from '../dto/create-many-user.dto';
import { CreateUserProvider } from './create-user.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { FindOneByGoogleIdProvider } from '../providers/find-one-by-google-id.provider';
import { CreateGoogleUserProvider } from '../providers/create-google-user.provider';
import { GoogleUser } from '../interfaces/google-user.interface';
export declare class UsersService {
    private userRepository;
    private readonly createUserProvider;
    private readonly usersCreateManyProvider;
    private readonly findOneByEmailProvider;
    private readonly findOneByGoogleIdProvider;
    private readonly createGoogleUserProvider;
    constructor(userRepository: Repository<User>, createUserProvider: CreateUserProvider, usersCreateManyProvider: UsersCreateManyProvider, findOneByEmailProvider: FindOneUserByEmailProvider, findOneByGoogleIdProvider: FindOneByGoogleIdProvider, createGoogleUserProvider: CreateGoogleUserProvider);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAll(getUserParamDto: GetUserParamDto, limit: number, page: number): void;
    findUserbyId(id: number): Promise<User>;
    createMany(createUsersDto: CreateManyUserDto): Promise<User[]>;
    findOneByEmail(email: string): Promise<User>;
    findOneByGoogleID(googleId: string): Promise<User | null>;
    createGoogleUser(googleUser: GoogleUser): Promise<User>;
}
