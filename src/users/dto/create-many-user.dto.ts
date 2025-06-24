import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { User } from '../user.entity';
import { Type } from 'class-transformer';
import { CreateUserDto } from './create-user.dto';

export class CreateManyUserDto {
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({
    each: true,
  })
  @Type(() => CreateUserDto)
  users: CreateUserDto[];
}
