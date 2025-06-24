import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto, GetPostQueryParamDto } from './dto/post.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatchPostDto } from './dto/patch-post.dto';
import { GetPostsDto } from './dto/get-post.dto';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';
import { IActiveUser } from 'src/auth/interfaces/active-user.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('{/:userId}')
  public getPosts(
    @Param() getPostQueryParamDto: GetPostQueryParamDto,
    @Query() postQuery: GetPostsDto,
  ) {
    return this.postsService.findAll(postQuery, getPostQueryParamDto.userId);
  }

  @ApiOperation({
    summary: 'Create new post',
  })
  @ApiResponse({
    status: 201,
    description: 'Post created successfully',
  })
  @Post('')
  public createPost(
    @Body() createPostDto: CreatePostDto,
    @ActiveUser() user: IActiveUser,
  ) {
    return this.postsService.create(user, createPostDto);
  }

  @ApiOperation({
    summary: 'Update post',
  })
  @ApiResponse({
    status: 200,
    description: 'post successfully updated',
  })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    return this.postsService.update(patchPostDto);
  }

  @ApiOperation({
    summary: 'Delete post',
  })
  @ApiResponse({
    status: 200,
    description: 'post successfully deleted',
  })
  @Delete()
  public deletePost(@Query('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
