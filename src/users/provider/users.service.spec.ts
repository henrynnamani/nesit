import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { UsersService } from './users.service';
import { CreateGoogleUserProvider } from '../providers/create-google-user.provider';
import { FindOneByGoogleIdProvider } from '../providers/find-one-by-google-id.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateUserProvider } from './create-user.provider';
import { DataSource } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

describe('User Controller', () => {
  let service: UsersService;
  beforeEach(async () => {
    const mockCreateUserProvider: Partial<CreateUserProvider> = {
      createUser: (createUserDto: CreateUserDto) =>
        Promise.resolve({
          id: 3,
          email: createUserDto.email,
          firstName: createUserDto.firstName,
          lastName: createUserDto.lastName,
          password: createUserDto.password,
        }),
    };

    const app: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: DataSource,
          useValue: {},
        },
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
        {
          provide: CreateGoogleUserProvider,
          useValue: {},
        },
        {
          provide: FindOneByGoogleIdProvider,
          useValue: {},
        },
        {
          provide: FindOneUserByEmailProvider,
          useValue: {},
        },
        {
          provide: UsersCreateManyProvider,
          useValue: {},
        },
        {
          provide: CreateUserProvider,
          useValue: mockCreateUserProvider,
        },
      ],
    }).compile();

    service = app.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    it('should be defined', () => {
      expect(service.createUser).toBeDefined();
    });

    it('should call create user on createUserProvider', async () => {
      const user = await service.createUser({
        firstName: 'Henry',
        lastName: 'Nnamani',
        email: 'henry@gmail.com',
        password: 'Pyr@hornet0101',
      });

      expect(user.email).toEqual('henry@gmail.com');
    });
  });
});
