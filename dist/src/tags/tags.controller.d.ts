import { TagsService } from './provider/tags.service';
import { CreateTagDto } from './dto/tags.dto';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    createTag(createTagDto: CreateTagDto): Promise<import("./tag.entity").Tag>;
    deleteTag(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
    softDeleteTag(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
