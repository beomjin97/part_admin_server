import { Category } from 'src/category/category.entity';
import { Manufacturer } from 'src/manufacturer/manufacturer.entity';
import { History } from 'src/history/histroy.entity';
import { Location } from 'src/location/location.entity';

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm';

@Entity()
export class Part {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  part_number: string;

  @Column()
  stock_count: number;

  @Column({
    nullable: true,
  })
  compatible_equipment: string;

  @Column({
    nullable: true,
  })
  note: string;

  @ManyToOne(() => Category, (category) => category.part)
  category: Category;

  @ManyToOne(() => Manufacturer, (manufacturer) => manufacturer.part)
  manufacturer: Manufacturer;

  @OneToMany(() => History, (history) => history.part)
  histories: History[]

  @ManyToMany(() => Location, (location) => location.part)
  locations: Location[]
}
