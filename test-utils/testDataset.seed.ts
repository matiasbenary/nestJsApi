import { UserEntity } from 'src/user/user.entity';
import { getConnection } from 'typeorm';

export const testDatasetSeed = async () => {
  const connection = await getConnection();
  const entityManager = connection.createEntityManager();

  entityManager.insert<UserEntity>(UserEntity, {
    name: 'Matias',
    surname: 'Benary',
    email: 'matiasbenary@gmail.com',
    password: '1234',
  });
  entityManager.insert<UserEntity>(UserEntity, {
    name: 'Test1',
    surname: 'matias',
    email: 'test1@gmail.com',
    password: '1234',
  });
  entityManager.insert<UserEntity>(UserEntity, {
    name: 'test2',
    surname: 'test2',
    email: 'test2@gmail.com',
    password: '1234',
  });
};
