import { IsDefined, IsString } from "class-validator";

export class CreatePostMetaOptionDto {
  @IsString()
  key: string;

  @IsDefined()
  value: any;
}
