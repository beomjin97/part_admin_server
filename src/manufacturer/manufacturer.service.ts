import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Manufacturer } from './manufacturer.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ManufacturerService {
    constructor(
        @InjectRepository(Manufacturer)
        private readonly manufacturerRepository: Repository<Manufacturer>
    ) {}

    createOne(name: string):Promise<Manufacturer> {
        const manufacturer = this.manufacturerRepository.create({name});
        return this.manufacturerRepository.save(manufacturer)
    }

    delete(id: number | number[]): Promise<DeleteResult> {
        return this.manufacturerRepository.delete(id);
    }

    findAll(): Promise<Manufacturer[]> {
        return this.manufacturerRepository.find();
    }
}
