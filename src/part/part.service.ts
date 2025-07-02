import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Part } from './part.entity';
import { Repository } from 'typeorm';

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

    createOne(part_name: string, stock_count: number): Promise<Part> {
        const part = this.partRepository.create({part_name, stock_count});
        
        return this.partRepository.save(part);
    }
}
