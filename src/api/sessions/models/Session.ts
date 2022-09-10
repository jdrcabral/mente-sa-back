import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn
} from "typeorm";

import { User } from "../../users/models";
import { SessionStatus, SessionType } from './enums';

@Entity()
export class Session extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => User)
    professional!: string;

    @ManyToMany(() => User)
    @JoinTable()
    patient!: User;

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

    @CreateDateColumn()
    createAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
