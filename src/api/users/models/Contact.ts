import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    ManyToOne, CreateDateColumn, UpdateDateColumn
} from "typeorm";

import { User } from './User';
import { ContactType } from './enums';

@Entity()
export class Contact extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({
        type: "enum",
        enum: ContactType,
        default: ContactType.PHONE,
    })
    type!: ContactType;

    @Column("varchar")
    contact!: string;

    @ManyToOne(() => User, (user) => user.contacts)
    user!: User;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}