import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsDefined,
  IsEnum,
  IsInt,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/postType.enum';
import { PostStatus } from '../enums/postStatus.enum';
import { CreatePostMetaOptionDto } from '../../meta-options/dto/create-post-meta-option.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GetPostQueryParamDto {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  userId: number;
}

export class CreatePostDto {
  @ApiProperty({
    description: 'Post title',
    example: 'buliding a new server',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'post | page | stories | series',
    example: 'post',
    enum: PostType,
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty({
    description: 'slug of post',
    example: 'slug-one',
  })
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  @ApiProperty({
    enum: PostStatus,
    description: 'draft | scheduled | review | published',
    example: 'published',
  })
  @IsEnum(PostStatus)
  @IsNotEmpty()
  status: PostStatus;

  @ApiPropertyOptional({
    description: 'This is content of the post',
    example: 'War occuring in the middle east.',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description:
      'Serialize the JSON object else validation error will be thrown',
    example:
      '{\r\n \"@context\": \"https:\/\/schema.org\",\r\n \"@type\": \"Person\" \r\n',
  })
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    description: 'imageUrl of featured post',
    example:
      'https://i.pinimg.com/736x/e4/4a/a1/e44aa117af8e511fc7353735e963f6b8.jpg',
  })
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description: 'Post published date',
    example: '2025-06-14T10:32:45.000Z',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional({
    description: 'Array of tags ID',
    example: [3, 4, 2],
  })
  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  tags?: number[];

  @ApiPropertyOptional({
    type: CreatePostMetaOptionDto,
    required: false,
    items: {
      type: 'object',
      properties: {
        metaValue: {
          type: 'object',
          description: 'Meta value is a JSON string',
          example: '{ "sideBarEnabled": true }',
        },
      },
    },
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionDto)
  metaOptions?: CreatePostMetaOptionDto;
}
