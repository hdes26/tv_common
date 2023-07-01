import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './shared/base.entity';
import { RoleNameEnum } from '../enums';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  @Index('IDX_user_email', { unique: true, where: `(deleted_at is null)` })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ type: 'enum', enum: RoleNameEnum })
  role: string;


}
