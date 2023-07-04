import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { BaseEntity } from "./shared/base.entity"
import { Service } from "./service.entity";
import { User } from "./user.entity";

@Entity()
export class Client extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, (user) => user.client)
    @JoinColumn()
    user: User;

    @OneToMany(() => Service, (services) => services.client)
    services: Service[];
}