import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne
} from "typeorm";

import { Gender, UserRole } from './enums';
import { hashPassword, verifyPassword } from '../../../utils/authentication/passwordHasher';
import { History } from "../../history/models";
import { Professional } from "../../professional/models";

@Entity()
export class Patient extends BaseEntity {
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
    password!: string;

    @Column("bool")
    isActive!: boolean

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.OTHER,
    })
    gender!: Gender;
    
    @ManyToOne(() => Professional)
    professional!: Professional;

    @OneToMany(() => History, (history) => history.patient)
    history!: History[];

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
