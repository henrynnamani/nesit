import { PostType } from '../enums/postType.enum';
import { PostStatus } from '../enums/postStatus.enum';
import { CreatePostMetaOptionDto } from '../../meta-options/dto/create-post-meta-option.dto';
export declare class GetPostQueryParamDto {
    userId: number;
}
export declare class CreatePostDto {
    title: string;
    postType: PostType;
    slug: string;
    status: PostStatus;
    content?: string;
    schema?: string;
    featuredImageUrl?: string;
    publishOn?: Date;
    tags?: number[];
    metaOptions?: CreatePostMetaOptionDto;
}
