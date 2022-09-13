import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    CreateDateColumn, UpdateDateColumn, ManyToOne
} from "typeorm";

import { Session } from "../../sessions/models";
import { User } from "../../users/models";

@Entity()
export class History extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("varchar")
    title!: string;

    @ManyToOne(() => User, (user) => user.history)
    user!: User;

    @ManyToOne(() => Session)
    session!: Session;

    @CreateDateColumn()
    createAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
