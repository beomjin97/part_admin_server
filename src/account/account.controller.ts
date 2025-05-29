import { Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}
    
    @Post()
    async createAccount() {
        // await this.accountService.createAccount('test', 'test', true)
    }
}
