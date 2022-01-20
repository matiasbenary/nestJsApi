import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';
import { UsersRepository } from './userRepository';
import { UserMapper } from './user.mapper';

@Injectable()
export class UserService {
  constructor(
    private usersRepository: UsersRepository,
    private mapper: UserMapper,
  ) {}

  async getAllUsers(): Promise<UserDTO[]> {
    const users: UserEntity[] = await this.usersRepository.getAllUsers();
    return users.map((user) => this.mapper.entityToDto(user));
  }

  async getUserById(id: string): Promise<UserDTO> {
    const user: UserEntity = await this.usersRepository.getUserById(id);
    return this.mapper.entityToDto(user);
  }

  async newUser(userDTO: UserDTO): Promise<UserDTO> {
    const newUser: UserEntity = await this.usersRepository.newUser(userDTO);
    return this.mapper.entityToDto(newUser);
  }

  async updateUser(id: string, userDTO: UserDTO): Promise<UserDTO> {
    console.log(userDTO, id);
    const updateUser = await this.usersRepository.updateUser(id, userDTO);
    return this.mapper.entityToDto(updateUser);
  }

  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.deleteUser(id);
  }
}
