import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { GetUserParamDto } from '../dto/get-user.dto';
import { User } from '../user.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUserDto } from '../dto/create-many-user.dto';
import { CreateUserProvider } from './create-user.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { FindOneByGoogleIdProvider } from '../providers/find-one-by-google-id.provider';
import { CreateGoogleUserProvider } from '../providers/create-google-user.provider';
import { GoogleUser } from '../interfaces/google-user.interface';

/**
 * User connection class and business logic handling
 */
@Injectable()
export class UsersService {
  /** Injects Dependencies */
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly createUserProvider: CreateUserProvider,
    private readonly usersCreateManyProvider: UsersCreateManyProvider,
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,
    private readonly findOneByEmailProvider: FindOneUserByEmailProvider,
    private readonly findOneByGoogleIdProvider: FindOneByGoogleIdProvider,
    private readonly createGoogleUserProvider: CreateGoogleUserProvider,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.createUserProvider.createUser(createUserDto);
  }

  /** method returns all user */
  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    /**
     * Custom Exception
     */
    throw new HttpException(
      {
        status: HttpStatus.MOVED_PERMANENTLY,
        error: 'The API endpoint does not exist',
        fileName: 'users.service.ts',
        lineNumber: 88,
      },
      HttpStatus.MOVED_PERMANENTLY,
    );
  }

  /** Find an individual user */
  public async findUserbyId(id: number) {
    let user: User | null;

    try {
      user = await this.userRepository.findOneBy({ id });
    } catch (err) {
      throw new RequestTimeoutException('There was an error saving user', {
        description: 'Error connecting to database',
      });
    }

    if (!user) {
      throw new BadRequestException('User ID does not exist');
    }

    return user;
  }

  public async createMany(createUsersDto: CreateManyUserDto) {
    return this.usersCreateManyProvider.createMany(createUsersDto);
  }

  public async findOneByEmail(email: string) {
    return await this.findOneByEmailProvider.findUserByEmail(email);
  }

  public async findOneByGoogleID(googleId: string) {
    return await this.findOneByGoogleIdProvider.findOneByGoogleId(googleId);
  }

  public async createGoogleUser(googleUser: GoogleUser) {
    return await this.createGoogleUserProvider.createGoogleUser(googleUser);
  }
}
