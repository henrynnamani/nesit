import { CreateTagDto } from 'src/tags/dto/tags.dto';
import { Tag } from 'src/tags/tag.entity';
import { Repository } from 'typeorm';
export declare class TagsService {
    private tagRepository;
    constructor(tagRepository: Repository<Tag>);
    create(createTagDto: CreateTagDto): Promise<Tag>;
    findMultipleTags(tags: number[]): Promise<Tag[]>;
    deleteTag(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
    softDelete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
