import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './provider/meta-options.service';
import { CreatePostMetaOptionDto } from './dto/create-post-meta-option.dto';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(
    /**
     * Inject MetaOptions Service
     */
    private readonly metaOptionsService: MetaOptionsService,
  ) {}

  /**
   *
   * Create meta options Controller
   *
   */
  @Post()
  public async createMetaOption(
    @Body()
    createPostMetaOptionDto: CreatePostMetaOptionDto,
  ) {
    return this.metaOptionsService.create(createPostMetaOptionDto);
  }
}
