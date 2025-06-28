import { UsersService } from 'src/users/provider/users.service';
import { SigninDto } from '../dto/signin.dto';
import { SignInProvider } from '../providers/sign-in.provider';
import { RefreshTokenProvider } from '../providers/refresh-token.provider';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly signInProvider;
    private readonly refreshTokenProvider;
    constructor(usersService: UsersService, signInProvider: SignInProvider, refreshTokenProvider: RefreshTokenProvider);
    signin(signinDto: SigninDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken(refreshTokenDto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
