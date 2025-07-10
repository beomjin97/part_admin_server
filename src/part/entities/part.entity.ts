import { Category } from 'src/category/entities/category.entity';
import { Manufacturer } from 'src/manufacturer/entities/manufacturer.entity';
import { History } from 'src/history/entities/histroy.entity';
import { Location } from 'src/location/entities/location.entity';

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm';

@Entity()
export class Part {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  part_number?: string;

  @Column()
  part_name: string;

  @Column()
  stock_count: number;

  @Column({
    nullable: true,
  })
  compatible_equipment?: string;

  @Column({
    nullable: true,
  })
  note?: string;

  @ManyToOne(() => Category, (category) => category.parts)
  category: Category;

  @ManyToOne(() => Manufacturer, (manufacturer) => manufacturer.parts)
  manufacturer: Manufacturer;

  @OneToMany(() => History, (history) => history.part)
  histories: History[]

  @ManyToMany(() => Location, (location) => location.parts)
  locations: Location[]
}
