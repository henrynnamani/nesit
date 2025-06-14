import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/provider/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll() {
    return [
      {
        firstName: 'Henry',
        lastName: 'Nnamani',
      },
      {
        firstName: 'Gwen',
        lastName: 'Benjamin',
      },
    ];
  }

  public findUserbyId(id: string) {
    return {
      id: 345,
      firstName: 'Joy',
      lastName: 'Anita',
    };
  }
}
