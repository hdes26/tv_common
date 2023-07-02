import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm"
import { BaseEntity } from "./shared/base.entity"
import { Client } from "./client.entity";
import { Technician } from "./technician.entity";
import { ServiceStatusEnum } from "../enums";

@Entity()
export class Service extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 50 })
    direction: string;

    @Column({ length: 100 })
    description: string;

    @Column({ type: 'enum', enum: ServiceStatusEnum, default: ServiceStatusEnum.READY })
    status: ServiceStatusEnum

    @Column({ type: "date" })
    date_to_attend: Date;

    @ManyToOne(() => Client, (client) => client.services)
    client: Client;

    @ManyToOne(() => Technician, (technician) => technician.services)
    technician: Technician;

}