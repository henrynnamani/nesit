import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../user.entity';
import { GetUserParamDto } from '../dto/get-user.dto';
import { Repository } from 'typeorm';
import { HashingProvider } from 'src/auth/provider/hashing.provider';
import { MailService } from 'src/mail/providers/mail.service';
export declare class CreateUserProvider {
    private readonly userRepository;
    private readonly hashingProvider;
    private readonly mailService;
    constructor(userRepository: Repository<User>, hashingProvider: HashingProvider, mailService: MailService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAll(getUserParamDto: GetUserParamDto, limit: number, page: number): void;
}
