import { Module } from '@nestjs/common';
import { TagsService } from './provider/tags/tags.service';

@Module({
  providers: [TagsService],
})
export class TagsModule {}
