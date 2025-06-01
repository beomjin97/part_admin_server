import { Body, Controller, NotFoundException, Post, UnauthorizedException } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}
    
    @Post()
    async createAccount() {
        await this.accountService.createAccount('test', 'test', true)
    }

    @Post('/signin')
    async signIn(@Body() body: {user_id: string, password: string} ) {
        const account = await this.accountService.findAccount(body.user_id);
        if (account == null) {
            throw new NotFoundException('No Account exists.');
        }
        
        if (!await this.accountService.comparePassword(body.password, account.password)) {
            throw new UnauthorizedException('Incorrect password.')
        } else {
            return await this.accountService.login(body.user_id, account.admin);
        }
    }
}
