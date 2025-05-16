import { Part } from "src/part/part.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    large_number: string;

    @Column({
        nullable: true,
    })
    small_number: string;

    @ManyToMany(() => Part, (part) => part.locations)
    part: Part;
}