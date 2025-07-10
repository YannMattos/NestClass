import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'name',
    length: 100,
    nullable: false,
  })
  nome: string;

  @Column({
    name: 'email',
    length: 100,
    nullable: false,
  })
  email: string;

  @Column({
    name: 'password',
    length: 100,
    nullable: false,
  })
  senha: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: string;
}
