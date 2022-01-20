import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserMapper {
  dtoToEntity(userDTO: UserDTO): UserEntity {
    return new UserEntity(
      userDTO.id,
      userDTO.name,
      userDTO.surname,
      userDTO.email,
      userDTO.password,
      userDTO.createdAt,
      userDTO.updatedAt,
    );
  }

  entityToDto(userEntity: UserEntity): UserDTO {
    return new UserDTO(
      userEntity.id,
      userEntity.name,
      userEntity.surname,
      userEntity.email,
      userEntity.password,
      userEntity.createdAt,
      userEntity.updatedAt,
    );
  }
}
