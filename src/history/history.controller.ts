import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Post, Request, UseGuards } from '@nestjs/common';
import { HistoryService } from './history.service';
import { PartService } from 'src/part/part.service';
import { AccountService } from 'src/account/account.service';
import { JwtAuthGuard } from 'src/account/jwt-auth.guard';

@Controller('history')
export class HistoryController {
    
    constructor(
        private readonly historyService: HistoryService,
        private readonly partService: PartService,
        private readonly accountService: AccountService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async addHistroy(
        @Body() body: {part_id: number, is_import: boolean, count: number, date: Date}, 
        @Request() req
    ) {
        const part = await this.partService.findOne(body.part_id);
        if (part == null) {
            throw new NotFoundException('No part exists with that ID.');
        }

        const author = await this.accountService.findAccount(req.user.id);

        if (author == null) {
            throw new InternalServerErrorException('Something wrong. Please contact server administrator')
        }

        await this.historyService.createOne(body.is_import, body.date, body.count, part, author);
    }

    @Get()
    async getAllHistories() {
        return await this.historyService.findAll();
    }
}
