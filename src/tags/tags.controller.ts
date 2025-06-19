import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { TagsService } from './provider/tags.service';
import { CreateTagDto } from './dto/tags.dto';

@Controller('tags')
export class TagsController {
  /***
   * Inject Tags Service
   */
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  createTag(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Delete()
  deleteTag(@Query('id', ParseIntPipe) id: number) {
    return this.tagsService.deleteTag(id);
  }

  @Delete('soft')
  softDeleteTag(@Query('id', ParseIntPipe) id: number) {
    return this.tagsService.softDelete(id);
  }
}
