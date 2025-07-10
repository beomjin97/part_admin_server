import { Body, Controller, Delete, Get, HttpCode, Post, Query } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { CreateManufacturerDto } from './dto/crerate-manufacturer.dto';
import { ParseIdArrayPipe } from 'src/common/pipes/parse-id-array.pipe';

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
    @HttpCode(204)
    async createManufacturer(@Body() createManufacturerDto:CreateManufacturerDto) {
        await this.manufacturerService.createOne(createManufacturerDto);
    }

    @Delete()
    async deleteManufacturer(@Query('ids', ParseIdArrayPipe) ids: number[]) {
        return await this.manufacturerService.delete(ids);
    }
}
