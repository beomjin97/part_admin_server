import { Body, Controller, Post } from '@nestjs/common';
import { PartService } from './part.service';

@Controller('part')
export class PartController {
    constructor(
        private readonly partService: PartService
    ) {}

    // TODO
    @Post()
    async postPart(@Body() body: {part_name: string, stock_count: number}) {
        return await this.partService.createOne(body.part_name, body.stock_count);
    }
}
