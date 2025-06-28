import { CreatePostMetaOptionDto } from '../dto/create-post-meta-option.dto';
import { Repository } from 'typeorm';
import { MetaOption } from '../meta-options.entity';
export declare class MetaOptionsService {
    private readonly metaOptionRepository;
    constructor(metaOptionRepository: Repository<MetaOption>);
    create(createPostMetaOptionDto: CreatePostMetaOptionDto): Promise<MetaOption>;
}
