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
}
