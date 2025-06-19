import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
    constructor(
        private readonly locationService: LocationService
    ) {}

    @Get()
    async getAllLocations() {
       return await this.locationService.findAll()
    }

    @Post()
    async postLocation(
        @Body() body: {
            large_location: string, 
            small_location?:string
        },
    ) {
        await this.locationService.createOne(body.large_location, body.small_location)
    }

    @Delete()
    async deleteLocation(@Query('ids')ids: string) {
        const idArray = ids
            .split(',')
            .map(id => parseInt(id.trim(), 10))
            .filter((id) => !isNaN(id))
        
        return await this.locationService.delete(idArray);
    }
}
