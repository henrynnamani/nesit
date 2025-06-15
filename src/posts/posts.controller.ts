import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto, GetPostQueryParamDto } from './dto/post.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatchPostDto } from './dto/patch-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('{/:userId}')
  public getPosts(@Param() getPostQueryParamDto: GetPostQueryParamDto) {
    return this.postsService.findAll(getPostQueryParamDto.userId);
  }

  @ApiOperation({
    summary: 'Create new post',
  })
  @ApiResponse({
    status: 201,
    description: 'Post created successfully',
  })
  @Post('')
  public createPost(@Body() createPostDto: CreatePostDto) {
    return createPostDto;
  }

  @ApiOperation({
    summary: 'Update post',
  })
  @ApiResponse({
    status: 200,
    description: 'post successfully updated',
  })
  @Patch()
  public updatePost(@Body() patchPostsDto: PatchPostDto) {
    console.group(patchPostsDto);
  }
}
