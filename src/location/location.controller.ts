import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { ParseIdArrayPipe } from 'src/common/pipes/parse-id-array.pipe';
import { CreateLocationDto } from './dto/create-location.dto';

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
    async createLocation(
        @Body() createLocationDto: CreateLocationDto,
    ) {
        await this.locationService.createOne(createLocationDto);
    }

    @Delete()
    async deleteLocation(@Query('ids', ParseIdArrayPipe)ids: number[]) {        
        return await this.locationService.delete(ids);
    }
}
