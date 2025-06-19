import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/provider/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dto/post.dto';
import { MetaOption } from 'src/meta-options/meta-options.entity';
import { TagsService } from 'src/tags/provider/tags.service';
import { PatchPostDto } from '../dto/patch-post.dto';

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
  ) {}
  public async findAll(userId: number) {
    let posts = await this.postRepository.find({
      relations: {
        metaOptions: true,
        author: true,
        tags: true,
      },
    });

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
    let tags =
      patchPostDto.tags &&
      (await this.tagsService.findMultipleTags(patchPostDto.tags));

    let post = await this.postRepository.findOneBy({
      id: patchPostDto.id,
    });

    if (!post) return;

    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;

    post.tags = tags;

    return await this.postRepository.save(post);
  }
}
