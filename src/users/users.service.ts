import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/provider/auth.service';
import { GetUserParamDto } from './dto/get-user.dto';

/** 
 * User connection class and business logic handling
*/
@Injectable()
export class UsersService {
  /** Injects Dependencies */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /** method returns all user */
  public findAll(getUserParamDto: GetUserParamDto, limit: number, page: number) {
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

  /** Find an individual user */
  public findUserbyId(id: string) {
    return {
      id: 345,
      firstName: 'Joy',
      lastName: 'Anita',
    };
  }
}
