import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto } from 'src/tags/dto/tags.dto';
import { Tag } from 'src/tags/tag.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}
  public async create(createTagDto: CreateTagDto) {
    let tag = this.tagRepository.create(createTagDto);

    return await this.tagRepository.save(tag);
  }

  public async findMultipleTags(tags: number[]) {
    let result = await this.tagRepository.find({
      where: {
        id: In(tags),
      },
    });

    return result;
  }

  public async deleteTag(id: number) {
    await this.tagRepository.delete(id);

    return {
      deleted: true,
      id,
    };
  }

  public async softDelete(id: number) {
    await this.tagRepository.softDelete(id);

    return {
      deleted: true,
      id,
    };
  }
}
