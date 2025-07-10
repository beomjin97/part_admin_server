import { Part } from "src/part/entities/part.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    large_location: string;

    @Column({
        nullable: true,
    })
    small_location?: string;

    @ManyToMany(() => Part, (part) => part.locations)
    parts: Part[];
}