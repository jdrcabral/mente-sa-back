import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    OneToMany, CreateDateColumn, UpdateDateColumn
} from "typeorm";

import { Session } from "../../sessions/models";

@Entity()
export class Resource extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("varchar")
    title!: string;

    @Column("varchar")
    category!: string;

    @Column("varchar")
    description!: string;

    @OneToMany(() => Session, (session) => session.resource)
    sessions!: Session[];

    @CreateDateColumn()
    createAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
