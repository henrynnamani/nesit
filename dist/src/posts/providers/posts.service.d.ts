import { UsersService } from 'src/users/provider/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { CreatePostDto } from '../dto/post.dto';
import { TagsService } from 'src/tags/provider/tags.service';
import { PatchPostDto } from '../dto/patch-post.dto';
import { GetPostsDto } from '../dto/get-post.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { CreatePostProvider } from './create-post.provider';
import { IActiveUser } from 'src/auth/interfaces/active-user.interface';
export declare class PostsService {
    private readonly usersService;
    private postRepository;
    private readonly tagsService;
    private readonly paginationProvider;
    private readonly createPostProvider;
    constructor(usersService: UsersService, postRepository: Repository<Post>, tagsService: TagsService, paginationProvider: PaginationProvider, createPostProvider: CreatePostProvider);
    findAll(postQuery: GetPostsDto, userId: number): Promise<Paginated<Post>>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
    create(user: IActiveUser, createPostDto: CreatePostDto): Promise<Post>;
    update(patchPostDto: PatchPostDto): Promise<Post>;
}
