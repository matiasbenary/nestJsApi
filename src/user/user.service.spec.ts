import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmSQLITETestingModule } from 'test-utils/TypeORMSQLITETestingModule';
import { testDatasetSeed } from 'test-utils/testDataset.seed';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmSQLITETestingModule()],
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
    await testDatasetSeed();
  });

  it('should be defined', async () => {
    const users = await service.getAllUsers();
    expect(users).toHaveLength(3);
  });
});
