import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { User } from '../user.entity';
import { CreateUserDto } from './create-user.dto';
import { Type } from 'class-transformer';

export class CreateManyUserDto {
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({
    each: true,
  })
  @Type(() => User)
  users: User[];
}
