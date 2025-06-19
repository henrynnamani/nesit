import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionDto } from '../dto/create-post-meta-option.dto';
import { Repository } from 'typeorm';
import { MetaOption } from '../meta-options.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
  ) {}

  public async create(createPostMetaOptionDto: CreatePostMetaOptionDto) {
    let metaOption = this.metaOptionRepository.create(createPostMetaOptionDto);
    return await this.metaOptionRepository.save(metaOption);
  }
}
