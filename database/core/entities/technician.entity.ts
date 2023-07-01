import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm"
import { BaseEntity } from "./shared/base.entity"
import { User } from "./user.entity"
import { TechnicianStatusEnum } from "../enums";

@Entity()
export class Technician extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: TechnicianStatusEnum })
    status: TechnicianStatusEnum;

    @OneToOne(() => User, (user) => user.technician)
    @JoinColumn()
    user: User;
}