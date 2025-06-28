import { UsersService } from 'src/users/provider/users.service';
import { SigninDto } from '../dto/signin.dto';
import { HashingProvider } from '../provider/hashing.provider';
import { GenerateTokenProvider } from './generate-token.provider';
export declare class SignInProvider {
    private readonly usersService;
    private readonly hashingProvider;
    private readonly generateTokenProvider;
    constructor(usersService: UsersService, hashingProvider: HashingProvider, generateTokenProvider: GenerateTokenProvider);
    signIn(signInDto: SigninDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
