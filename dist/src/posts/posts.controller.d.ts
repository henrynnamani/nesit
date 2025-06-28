import { PostsService } from './providers/posts.service';
import { CreatePostDto, GetPostQueryParamDto } from './dto/post.dto';
import { PatchPostDto } from './dto/patch-post.dto';
import { GetPostsDto } from './dto/get-post.dto';
import { IActiveUser } from 'src/auth/interfaces/active-user.interface';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(getPostQueryParamDto: GetPostQueryParamDto, postQuery: GetPostsDto): Promise<import("../common/pagination/interfaces/paginated.interface").Paginated<import("./post.entity").Post>>;
    createPost(createPostDto: CreatePostDto, user: IActiveUser): Promise<import("./post.entity").Post>;
    updatePost(patchPostDto: PatchPostDto): Promise<import("./post.entity").Post>;
    deletePost(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
