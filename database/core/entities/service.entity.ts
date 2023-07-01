import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm"
import { BaseEntity } from "./shared/base.entity"
import { Client } from "./client.entity";
import { Technician } from "./technician.entity";

@Entity()
export class Service extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => Client, (client) => client.services)
    client: Client;

    @ManyToOne(() => Technician, (technician) => technician.services)
    technician: Technician;

}