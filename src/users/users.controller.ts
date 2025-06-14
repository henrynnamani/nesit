import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('{:id}/')
  getAllUser() {
    return [];
  }

  @Post('')
  createUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
