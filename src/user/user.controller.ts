import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserDTO[]> {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserDTO> {
    return await this.userService.getUserById(id);
  }

  @Post()
  async newUser(@Body() user: UserDTO): Promise<UserDTO> {
    return await this.userService.newUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UserDTO,
  ): Promise<UserDTO> {
    return await this.userService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
