import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(Location)
        private readonly locationRepository: Repository<Location> 
    ) {}

    createOne(large_location: string, small_location?: string):Promise<Location> {
        const location = this.locationRepository.create({
            large_location,
            small_location
        })
        return this.locationRepository.save(location)
    }

    delete(id: number | number[] ):Promise<DeleteResult> {
        return this.locationRepository.delete(id)
    }

    findAll():Promise<Location[]> {
        return this.locationRepository.find()
    }
}
