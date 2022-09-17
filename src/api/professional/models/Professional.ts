import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    OneToMany, CreateDateColumn, UpdateDateColumn
} from "typeorm";

import { Gender } from './enums';
import { hashPassword, verifyPassword } from '../../../utils/authentication/passwordHasher';
import { Patient } from "../../patient/models";

@Entity()
export class Professional extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("varchar")
    name!: string;

    @Column("varchar")
    email!: string;

    @Column("varchar")
    cpf!: string;

    @Column("date")
    birthDate!: Date;

    @Column("varchar")
    professionalIdentification!: string;

    @Column("varchar")
    password!: string;

    @Column("bool")
    isActive!: boolean;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.OTHER,
    })
    gender!: Gender;

    @OneToMany(() => Patient, (patient) => patient.professional)
    patients!: Patient[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    hashUserPassword() {
        this.password = hashPassword(this.password);
    }

    matchUserPassword(password: string) {
        return verifyPassword(password, this.password);
    }
}
