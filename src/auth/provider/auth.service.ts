import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/provider/users.service';
import { SigninDto } from '../dto/signin.dto';
import { SignInProvider } from '../providers/sign-in.provider';
import { RefreshTokenProvider } from '../providers/refresh-token.provider';
import { RefreshTokenDto } from '../dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly signInProvider: SignInProvider,
    private readonly refreshTokenProvider: RefreshTokenProvider,
  ) {}

  public async signin(signinDto: SigninDto) {
    return await this.signInProvider.signIn(signinDto);
  }

  public async refreshToken(refreshTokenDto: RefreshTokenDto) {
    return await this.refreshTokenProvider.refreshToken(refreshTokenDto);
  }
}
