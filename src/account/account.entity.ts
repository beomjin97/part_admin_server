import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { History } from "src/history/histroy.entity";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    password: string;

    @Column()
    admin: boolean;

    @OneToMany(() => History, (history) => history.part)
    histories: History[];
}