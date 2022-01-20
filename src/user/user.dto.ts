import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  surname: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  createdAt?: string;
  @ApiProperty()
  updatedAt?: string;

  constructor(id, name, surname, email, password, createdAt?, updatedAt?) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
