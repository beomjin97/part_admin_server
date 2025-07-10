import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(Location)
        private readonly locationRepository: Repository<Location> 
    ) {}

    createOne(createLocationDto: CreateLocationDto):Promise<Location> {
        const location = this.locationRepository.create(createLocationDto)
        return this.locationRepository.save(location)
    }

    delete(id: number | number[] ):Promise<DeleteResult> {
        return this.locationRepository.delete(id)
    }

    findAll():Promise<Location[]> {
        return this.locationRepository.find()
    }
}
