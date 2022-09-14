import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn
} from "typeorm";

import { Patient } from "../../patient/models";
import { Professional } from "../../professional/models";
import { Resource } from "../../resources/models";
import { SessionStatus, SessionType } from './enums';

@Entity()
export class Session extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => Professional)
    professional!: Professional;

    @ManyToMany(() => Patient)
    @JoinTable()
    patient!: Patient;

    @Column("timestamptz")
    scheduledDate!: Date;

    @Column({
        type: "enum",
        enum: SessionStatus,
        default: SessionStatus.PENDING,
    })
    status!: SessionStatus;

    @Column("varchar")
    theme!: string;

    @Column("int")
    duration!: number;

    @Column({
        type: "enum",
        enum: SessionType,
        default: SessionType.INDIVIDUAL,
    })
    type!: SessionType;

    @ManyToOne(() => Resource, (resourse) => resourse.sessions)
    resource!: Resource;

    @CreateDateColumn()
    createAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
