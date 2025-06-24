import {
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneUserByEmailProvider {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async findUserByEmail(email: string) {
    let user: User | null;

    try {
      user = await this.userRepository.findOneBy({
        email,
      });
    } catch (err) {
      throw new RequestTimeoutException(err, {
        description: 'Could not fetch user',
      });
    }

    if (!user) {
      throw new NotFoundException('User does not Exist');
    }

    return user;
  }
}
