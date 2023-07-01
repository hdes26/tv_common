import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { BaseEntity } from "./shared/base.entity"
import { User } from "./user.entity"

@Entity()
export class Client extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, (user) => user.client)
    @JoinColumn()
    user: User;
}