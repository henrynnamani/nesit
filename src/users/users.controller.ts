import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './provider/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserParamDto } from './dto/get-user.dto';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { CreateManyUserDto } from './dto/create-many-user.dto';
import { AccessTokenGuard } from 'src/auth/guards/accessToken/access-token.guard';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AuthType } from 'src/auth/enum/auth-type.enum';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private configService: ConfigService,
  ) {}

  @Get('{/:id}')
  @ApiOperation({
    summary: 'Fetch list of registered users',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'Number of entries returned per query',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'The position of the page number',
    example: 2,
  })
  @ApiResponse({
    status: 200,
    description: 'User fetched successfully',
  })
  getUsers(
    @Param() getUserParamDto: GetUserParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUserParamDto, limit, page);
  }

  @Post('create-many')
  async createManyUser(@Body() createUsersDto: CreateManyUserDto) {
    return this.usersService.createMany(createUsersDto);
  }

  @Post('')
  @Auth(AuthType.None)
  @UseInterceptors(ClassSerializerInterceptor)
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
