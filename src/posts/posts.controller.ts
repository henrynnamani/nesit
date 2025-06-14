import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { GetPostQueryParamDto } from './dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('{/:userId}')
  public getPosts(@Param() getPostQueryParamDto: GetPostQueryParamDto) {
    return this.postsService.findAll(getPostQueryParamDto.userId);
  }
}
