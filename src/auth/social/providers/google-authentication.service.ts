import {
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { OAuth2Client, TokenPayload } from 'google-auth-library';
import jwtConfig from 'src/auth/config/jwt.config';
import { GoogleTokenDto } from '../dto/google-token.dto';
import { UsersService } from 'src/users/provider/users.service';
import { GenerateTokenProvider } from 'src/auth/providers/generate-token.provider';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  private oauthClient: OAuth2Client;

  constructor(
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly generateTokenProvider: GenerateTokenProvider,
  ) {}

  onModuleInit() {
    const clientId = this.jwtConfiguration.googleClientId;
    const clientSecret = this.jwtConfiguration.googleClientSecret;

    this.oauthClient = new OAuth2Client(clientId, clientSecret);
  }

  public async authenticate(googleTokenDto: GoogleTokenDto) {
    try {
      const loginTicket = await this.oauthClient.verifyIdToken({
        idToken: googleTokenDto.token,
      });

      const payload = loginTicket.getPayload();

      if (!payload) {
        throw new UnauthorizedException();
      }

      const {
        sub,
        email,
        given_name: firstName,
        family_name: lastName,
      }: TokenPayload = payload;

      const user = await this.usersService.findOneByGoogleID(sub);

      if (user) {
        return this.generateTokenProvider.generateTokens(user);
      }

      const newUser = await this.usersService.createGoogleUser({
        email: email!,
        firstName: firstName!,
        lastName: lastName!,
        googleId: sub,
      });

      return await this.generateTokenProvider.generateTokens(newUser);
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
}
