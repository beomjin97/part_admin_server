import { Account } from "src/account/account.entity";
import { Part } from "src/part/part.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class History {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    is_import: boolean;

    @Column()
    date: Date;

    @Column()
    count: number;

    @ManyToOne(() => Part, (part) => part.histories)
    part: Part;

    @ManyToOne(() => Account, (account) => account.histories)
    account: Account
}