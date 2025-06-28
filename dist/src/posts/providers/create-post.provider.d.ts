import { CreatePostDto } from '../dto/post.dto';
import { UsersService } from 'src/users/provider/users.service';
import { TagsService } from 'src/tags/provider/tags.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { IActiveUser } from 'src/auth/interfaces/active-user.interface';
export declare class CreatePostProvider {
    private readonly usersService;
    private readonly tagsService;
    private readonly repository;
    constructor(usersService: UsersService, tagsService: TagsService, repository: Repository<Post>);
    createPost(user: IActiveUser, createPostDto: CreatePostDto): Promise<Post>;
}
