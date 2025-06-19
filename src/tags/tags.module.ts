import { Module } from '@nestjs/common';
import { TagsService } from './provider/tags.service';
import { Tag } from './tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [TagsService],
  imports: [TypeOrmModule.forFeature([Tag])],
  exports: [TagsService],
})
export class TagsModule {}
