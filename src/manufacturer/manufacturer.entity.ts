import { Part } from "src/part/part.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manufacturer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Part, (part) => part.manufacturer)
    parts: Part[];
}