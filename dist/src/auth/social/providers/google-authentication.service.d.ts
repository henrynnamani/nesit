import { OnModuleInit } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import jwtConfig from 'src/auth/config/jwt.config';
import { GoogleTokenDto } from '../dto/google-token.dto';
import { UsersService } from 'src/users/provider/users.service';
import { GenerateTokenProvider } from 'src/auth/providers/generate-token.provider';
export declare class GoogleAuthenticationService implements OnModuleInit {
    private readonly jwtConfiguration;
    private readonly usersService;
    private readonly generateTokenProvider;
    private oauthClient;
    constructor(jwtConfiguration: ConfigType<typeof jwtConfig>, usersService: UsersService, generateTokenProvider: GenerateTokenProvider);
    onModuleInit(): void;
    authenticate(googleTokenDto: GoogleTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
