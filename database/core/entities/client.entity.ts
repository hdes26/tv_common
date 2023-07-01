import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm"
import { BaseEntity } from "./shared/base.entity"
import { User } from "./user.entity"
import { ClientStatusEnum } from "../enums";

@Entity()
export class Client extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: ClientStatusEnum })
    status: ClientStatusEnum;

    @OneToOne(() => User, (user) => user.client)
    @JoinColumn()
    user: User;
}