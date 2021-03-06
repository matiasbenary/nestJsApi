import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';

export const TypeOrmSQLITETestingModule = () => [
  TypeOrmModule.forRoot({
    type: 'better-sqlite3',
    database: ':memory:',
    dropSchema: true,
    entities: [UserEntity],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([UserEntity]),
];
