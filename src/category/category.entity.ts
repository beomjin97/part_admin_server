import { Part } from "src/part/part.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    large_category: string;

    @Column({
        nullable: true,
    })
    small_category: string;

    @OneToOne(() => Part, (part) => part.category)
    part: Part
}