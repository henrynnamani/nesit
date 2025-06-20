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

/**
 * User connection class and business logic handling
 */
@Injectable()
export class UsersService {
  /** Injects Dependencies */
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly usersCreateManyProvider: UsersCreateManyProvider,
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    let existingUser: User | null;

    try {
      existingUser = await this.userRepository.findOne({
        where: { email: createUserDto.email },
      });
    } catch (err) {
      throw new RequestTimeoutException(
        'Unable to process request at the moment',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    if (existingUser)
      throw new BadRequestException('User with email already exists');

    const user = this.userRepository.create(createUserDto);

    try {
      await this.userRepository.save(user);
    } catch (err) {
      throw new RequestTimeoutException('There was an error saving user', {
        description: 'Error connecting to database',
      });
    }

    return user;
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
}
