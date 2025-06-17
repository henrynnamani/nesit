import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/provider/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}
  public findAll(userId: string) {
    const user = this.usersService.findUserbyId(userId);
    return userId;
  }
}
