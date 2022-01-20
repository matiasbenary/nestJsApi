import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  readonly id: string;
  @Column()
  readonly name: string;
  @Column()
  readonly surname: string;
  @Column({ unique: true })
  readonly email: string;
  @Column()
  readonly password: string;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;

  constructor(
    id,
    name,
    surname,
    email,
    password,
    createdAt = null,
    updatedAt = null,
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    if (createdAt) this.createdAt = createdAt;
    if (updatedAt) this.updatedAt = updatedAt;
  }
}
