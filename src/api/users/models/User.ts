import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    OneToMany, CreateDateColumn, UpdateDateColumn
} from "typeorm";

import { Contact } from './Contact';
import { Gender, UserRole } from './enums';
import { hashPassword, verifyPassword } from '../../../utils/authentication/passwordHasher';

@Entity()
export class User extends BaseEntity {
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

    @Column({
        type: "varchar",
        nullable: true,
    })
    professionalIdentification!: string;

    @Column("varchar")
    password!: string;

    @Column("bool")
    isActive!: boolean

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.PATIENT,
    })
    role!: UserRole;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.OTHER,
    })
    gender!: Gender;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts!: Contact[]

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
