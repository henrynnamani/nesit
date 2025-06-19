import { IsJSON, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostMetaOptionDto {
  @IsOptional()
  @IsJSON()
  metaValue?: string;
}
