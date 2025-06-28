import { PostType } from './enums/postType.enum';
import { PostStatus } from './enums/postStatus.enum';
import { MetaOption } from 'src/meta-options/meta-options.entity';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';
export declare class Post {
    id: number;
    title: string;
    postType: PostType;
    slug: string;
    status: PostStatus;
    content: string;
    schema: string;
    featuredImageUrl: string;
    publishOn: Date;
    tags?: Tag[];
    author: User;
    metaOptions: MetaOption;
}
