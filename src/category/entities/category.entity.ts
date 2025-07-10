import { Part } from "src/part/entities/part.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    large_category: string;

    @Column({
        nullable: true,
    })
    small_category?: string;

    @OneToMany(() => Part, (part) => part.category)
    parts: Part[]
}