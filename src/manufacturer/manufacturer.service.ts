import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Manufacturer } from './entities/manufacturer.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateManufacturerDto } from './dto/crerate-manufacturer.dto';

@Injectable()
export class ManufacturerService {
    constructor(
        @InjectRepository(Manufacturer)
        private readonly manufacturerRepository: Repository<Manufacturer>
    ) {}

    createOne(createManufacturerDto: CreateManufacturerDto):Promise<Manufacturer> {
        const manufacturer = this.manufacturerRepository.create(createManufacturerDto);
        return this.manufacturerRepository.save(manufacturer)
    }

    delete(id: number | number[]): Promise<DeleteResult> {
        return this.manufacturerRepository.delete(id);
    }

    findAll(): Promise<Manufacturer[]> {
        return this.manufacturerRepository.find();
    }
}
