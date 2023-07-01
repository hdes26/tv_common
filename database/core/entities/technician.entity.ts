import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, OneToMany } from "typeorm"
import { BaseEntity } from "./shared/base.entity"
import { TechnicianStatusEnum } from "../enums";
import { User } from "./user.entity";
import { Service } from "./service.entity";

@Entity()
export class Technician extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: TechnicianStatusEnum })
    status: TechnicianStatusEnum;

    @OneToOne(() => User, (user) => user.technician)
    @JoinColumn()
    user: User;

    @OneToMany(() => Service, (services) => services.technician)
    services: Service[];
}