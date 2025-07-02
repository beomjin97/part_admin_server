import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';

@Controller('manufacturer')
export class ManufacturerController {
    constructor(
        private readonly manufacturerService: ManufacturerService
    ) {}

    @Get()
    async getAllManufacturer() {
        return await this.manufacturerService.findAll();
    }

    @Post()
    async postManufacturer(@Body() body: {name: string}) {
        return await this.manufacturerService.createOne(body.name);
    }

    @Delete()
    async deleteManufacturer(@Query('ids') ids: string) {
        const idArray = ids
            .split(',')
            .map(id => parseInt(id.trim(), 10))
            .filter(id => !isNaN(id));
        
        return await this.manufacturerService.delete(idArray);
    }
}
