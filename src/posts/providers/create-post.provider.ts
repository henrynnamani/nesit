import {
  BadRequestException,
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreatePostDto } from '../dto/post.dto';
import { UsersService } from 'src/users/provider/users.service';
import { TagsService } from 'src/tags/provider/tags.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { PostType } from '../enums/postType.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';
import { IActiveUser } from 'src/auth/interfaces/active-user.interface';

@Injectable()
export class CreatePostProvider {
  constructor(
    private readonly usersService: UsersService,
    private readonly tagsService: TagsService,
    @InjectRepository(Post)
    private readonly repository: Repository<Post>,
  ) {}
  public async createPost(user: IActiveUser, createPostDto: CreatePostDto) {
    let author: User | null;
    let tags: Tag[] | undefined;

    try {
      author = await this.usersService.findUserbyId(user.sub);

      tags =
        createPostDto.tags &&
        (await this.tagsService.findMultipleTags(createPostDto.tags));
    } catch (err) {
      throw new ConflictException();
    }

    if (createPostDto.tags?.length !== tags?.length) {
      throw new BadRequestException('Please check your tag IDs');
    }

    let post = this.repository.create({
      ...createPostDto,
      author: author!,
      tags: tags,
    });

    try {
      return await this.repository.save(post);
    } catch (err) {
      throw new ConflictException(err, {
        description: 'Error connecting to database',
      });
    }
  }
}
