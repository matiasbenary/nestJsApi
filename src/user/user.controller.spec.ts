import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserMapper } from './user.mapper';
import { UserService } from './user.service';
import { UsersRepository } from './userRepository';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, UserMapper, UsersRepository],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
