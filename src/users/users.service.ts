import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
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
