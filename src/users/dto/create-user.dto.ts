import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(92)
  firstName: string;

  @IsString()
  @MinLength(4)
  @MaxLength(92)
  lastName: string;

  @IsEmail()
  @IsString()
  @MaxLength(92)
  email: string;

  @IsString()
  @MaxLength(92)
  password: string;
}
