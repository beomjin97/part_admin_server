import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Post, Request, UseGuards } from '@nestjs/common';
import { HistoryService } from './history.service';
import { PartService } from 'src/part/part.service';
import { AccountService } from 'src/account/account.service';
import { JwtAuthGuard } from 'src/account/jwt-auth.guard';
import { createHistoryDto } from './dto/create-history.dto';

@Controller('history')
export class HistoryController {
    
    constructor(
        private readonly historyService: HistoryService,
        private readonly partService: PartService,
        private readonly accountService: AccountService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async createHistory(
        @Body() createHistoryDto: createHistoryDto, 
        @Request() req
    ) {
        const part = await this.partService.findOne(createHistoryDto.part_id);
        if (part == null) {
            throw new NotFoundException('No part exists with that ID.');
        }

        const author = await this.accountService.findAccount(req.user.id);

        if (author == null) {
            throw new InternalServerErrorException('Something wrong. Please contact server administrator')
        }

        await this.historyService.createOne(createHistoryDto, part, author);
    }

    @Get()
    async getAllHistories() {
        return await this.historyService.findAll();
    }
}
