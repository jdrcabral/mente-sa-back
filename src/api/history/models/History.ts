import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    CreateDateColumn, UpdateDateColumn, ManyToOne
} from "typeorm";

import { Session } from "../../sessions/models";
import { Patient } from "../../patient/models";

@Entity()
export class History extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("varchar")
    title!: string;

    @ManyToOne(() => Patient, (patient) => patient.history)
    patient!: Patient;

    @ManyToOne(() => Session)
    session!: Session;

    @CreateDateColumn()
    createAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
