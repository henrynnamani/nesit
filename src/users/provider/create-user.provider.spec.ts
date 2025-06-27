import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { CreateUserProvider } from './create-user.provider';
import { HashingProvider } from 'src/auth/provider/hashing.provider';
import { MailService } from 'src/mail/providers/mail.service';
import { DataSource, ObjectLiteral, Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { BadRequestException } from '@nestjs/common';

type MockRepository<T extends ObjectLiteral = any> = Partial<
  Record<keyof Repository<T>, jest.Mock>
>;

const createMockRepository = <
  T extends ObjectLiteral,
>(): MockRepository<T> => ({
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
});

describe('CreateUserProvider', () => {
  let provider: CreateUserProvider;
  let usersRepository: MockRepository;
  let user = {
    firstName: 'Henry',
    lastName: 'Nnamani',
    email: 'henry@gmail.com',
    password: 'pyr@hornet0101',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserProvider,
        {
          provide: HashingProvider,
          useValue: {
            hashPassword: jest.fn(() => user.password),
          },
        },
        {
          provide: MailService,
          useValue: {
            sendUserWelcome: jest.fn(() => Promise.resolve()),
          },
        },
        {
          provide: DataSource,
          useValue: {},
        },
        {
          provide: getRepositoryToken(User),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    provider = module.get<CreateUserProvider>(CreateUserProvider);
    usersRepository = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  describe('createUser', () => {
    describe('When the user does not exist in database', () => {
      it('should create new user', async () => {
        usersRepository.findOne?.mockReturnValue(null);
        usersRepository.create?.mockReturnValue(user);
        usersRepository.save?.mockReturnValue(user);

        const newUser = await provider.createUser(user);

        expect(usersRepository.findOne).toHaveBeenCalledWith({
          where: { email: user.email },
        });
        expect(usersRepository.create).toHaveBeenCalledWith(user);
        expect(usersRepository.save).toHaveBeenCalledWith(user);
      });
    });
    describe('When user exist', () => {
      it('should throw BadRequestException', async () => {
        usersRepository.findOne?.mockReturnValue(user.email);
        usersRepository.create?.mockReturnValue(user);
        usersRepository.save?.mockReturnValue(user);

        try {
          const newUser = await provider.createUser(user);
        } catch (err) {
          expect(err).toBeInstanceOf(BadRequestException);
        }
      });
    });
  });
});
