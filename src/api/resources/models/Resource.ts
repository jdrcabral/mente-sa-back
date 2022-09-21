import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn
} from "typeorm";
import { Professional } from "../../professional/models";

import { Session } from "../../sessions/models";
import { Category } from "./enums";

@Entity()
export class Resource extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("varchar")
    title!: string;

    @Column({
        type: "enum",
        enum: Category,
        default: Category.OUTRO,
    })
    category!: Category;

    @Column("varchar")
    description!: string;

    @Column("bool")
    isActive!: boolean
    
    @Column("uuid")
    professionalId!: string;

    @OneToMany(() => Session, (session) => session.resource)
    sessions!: Session[];

    @ManyToOne(() => Professional, (professional) => professional.resources)
    @JoinColumn({ name: 'professionalId'})
    professional!: Professional;

    @CreateDateColumn()
    createAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
