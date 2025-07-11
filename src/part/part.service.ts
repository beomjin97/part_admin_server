import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Part } from './entities/part.entity';
import { Repository } from 'typeorm';
import { CreatePartDto } from './dto/create-part.dto';
import { Manufacturer } from 'src/manufacturer/entities/manufacturer.entity';
import { Category } from 'src/category/entities/category.entity';
import { Location } from 'src/location/entities/location.entity';

@Injectable()
export class PartService {

    constructor(
        @InjectRepository(Part) 
        private readonly partRepository: Repository<Part> ) 
    {}

    findOne(id:number): Promise< Part | null > {
        return this.partRepository.findOne({
            where: {
                id
            }
        })
    }

    createOne(createPartDto: CreatePartDto): Promise<Part> {
        const part = this.partRepository.create(createPartDto);
        return this.partRepository.save(part);
    }

    async mapResources(
        part: Part,
        category: Category, 
        location: Location, 
        manufacturer: Manufacturer
        ) {
        
        part.category= category;
        part.locations=[...part.locations, location];
        part.manufacturer = manufacturer;
    }
}
