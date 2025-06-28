import { MetaOptionsService } from './provider/meta-options.service';
import { CreatePostMetaOptionDto } from './dto/create-post-meta-option.dto';
export declare class MetaOptionsController {
    private readonly metaOptionsService;
    constructor(metaOptionsService: MetaOptionsService);
    createMetaOption(createPostMetaOptionDto: CreatePostMetaOptionDto): Promise<import("./meta-options.entity").MetaOption>;
}
