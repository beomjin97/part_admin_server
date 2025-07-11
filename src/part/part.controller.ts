import { BadRequestException, Body, Controller, HttpCode, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { PartService } from './part.service';
import { CreatePartDto } from './dto/create-part.dto';
import { MapPartDto } from './dto/map-part.dto';
import { LocationService } from 'src/location/location.service';
import { CategoryService } from 'src/category/category.service';
import { ManufacturerService } from 'src/manufacturer/manufacturer.service';

@Controller('part')
export class PartController {
    constructor(
        private readonly partService: PartService,
        private readonly locationService: LocationService,
        private readonly categoryService: CategoryService,
        private readonly manufacturerService: ManufacturerService
    ) {}

    // TODO
    @Post()
    @HttpCode(204)
    async createPart(@Body() createPartDto: CreatePartDto ) {
        await this.partService.createOne(createPartDto);
    }

    @Patch('/mapping/:id')
    @HttpCode(204)
    async mapPart(@Body() mapPartDto: MapPartDto, @Query('id', ParseIntPipe) id: number) {

        const part = await this.partService.findOne(id);

        if (part === null) {
            throw new BadRequestException('no part exists');
        }

        const {category_id, location_id, manufacturer_id} = mapPartDto;

        const category = await this.categoryService.findOne(category_id);
        
        if (category === null) {
            throw new BadRequestException('no category exists');
        }

        const location = await this.locationService.findOne(location_id);
        
        if (location === null) {
            throw new BadRequestException('no location exists');
        }

        const manufacturer = await this.manufacturerService.findOne(manufacturer_id);
        
        if (manufacturer === null) {
            throw new BadRequestException('no manufacturer exists');
        }

        await this.partService.mapResources(part, category, location, manufacturer);
    }
}
