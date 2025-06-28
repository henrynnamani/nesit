import { RefreshTokenDto } from '../dto/refresh-token.dto';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { GenerateTokenProvider } from './generate-token.provider';
import { UsersService } from 'src/users/provider/users.service';
export declare class RefreshTokenProvider {
    private readonly jwtService;
    private readonly jwtConfiguration;
    private readonly generateTokenProvider;
    private readonly usersService;
    constructor(jwtService: JwtService, jwtConfiguration: ConfigType<typeof jwtConfig>, generateTokenProvider: GenerateTokenProvider, usersService: UsersService);
    refreshToken(refreshTokenDto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
