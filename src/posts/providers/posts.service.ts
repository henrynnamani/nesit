import {
  BadRequestException,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { UsersService } from 'src/users/provider/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dto/post.dto';
import { TagsService } from 'src/tags/provider/tags.service';
import { PatchPostDto } from '../dto/patch-post.dto';
import { Tag } from 'src/tags/tag.entity';
import { GetPostsDto } from '../dto/get-post.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';

@Injectable()
export class PostsService {
  constructor(
    /**
     * Inject Services
     */
    private readonly usersService: UsersService,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private readonly tagsService: TagsService,
    private readonly paginationProvider: PaginationProvider,
  ) {}
  public async findAll(
    postQuery: GetPostsDto,
    userId: number,
  ): Promise<Paginated<Post>> {
    let posts = await this.paginationProvider.paginateQuery(
      {
        limit: postQuery.limit,
        page: postQuery.page,
      },
      this.postRepository,
    );

    return posts;
  }

  public async delete(id: number) {
    await this.postRepository.delete(id);

    return {
      deleted: true,
      id,
    };
  }

  /**
   * Create new post
   */
  public async create(createPostDto: CreatePostDto) {
    const author = await this.usersService.findUserbyId(createPostDto.authorId);

    let tags =
      createPostDto.tags &&
      (await this.tagsService.findMultipleTags(createPostDto.tags));

    let post = this.postRepository.create({
      ...createPostDto,
      author: author!,
      tags: tags,
    });

    return await this.postRepository.save(post);
  }

  public async update(patchPostDto: PatchPostDto) {
    let tags: Tag[] | undefined;
    let post: Post | null;

    try {
      tags =
        patchPostDto.tags &&
        (await this.tagsService.findMultipleTags(patchPostDto.tags));
    } catch (err) {
      throw new RequestTimeoutException('Unable to find tags', {
        description: 'Error connecting to database',
      });
    }

    if (!tags || tags.length !== patchPostDto.tags!.length) {
      throw new BadRequestException(
        'Please check that you include correct tags',
      );
    }

    try {
      post = await this.postRepository.findOneBy({
        id: patchPostDto.id,
      });
    } catch (err) {
      throw new RequestTimeoutException('Unable to find tags', {
        description: 'Error connecting to database',
      });
    }

    if (!post) {
      throw new NotFoundException('Post does not exist');
    }

    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;

    post.tags = tags;

    try {
      await this.postRepository.save(post);
    } catch (err) {
      throw new RequestTimeoutException('Unable to find tags', {
        description: 'Error connecting to database',
      });
    }

    return post;
  }
}
