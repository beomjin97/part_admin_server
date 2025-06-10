import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
            largeLocation: string, 
            smallLocation?:string
        },
    ) {
        await this.locationService.createOne(body.largeLocation, body.smallLocation)
    }

    @Delete('/:ids')
    async deleteLocation(@Param('ids')ids: string) {
        const idArray = ids
            .split(',')
            .map(id => parseInt(id.trim(), 10))
            .filter((id) => !isNaN(id))
        
        return await this.locationService.delete(idArray);
    }
}
