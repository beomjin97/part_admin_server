import { Body, Controller, NotFoundException, Post, UnauthorizedException } from '@nestjs/common';
import { AccountService } from './account.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}
    
    // TODO
    @Post()
    async createAccount() {
        await this.accountService.createAccount('test', 'test', true)
    }

    @Post('/signin')
    async signIn(@Body() signInDto: SignInDto ) {
        const {user_id, password} = signInDto;

        const account = await this.accountService.findAccount(user_id);
        if (account == null) {
            throw new NotFoundException('No Account exists.');
        }
        
        if (!await this.accountService.comparePassword(password, account.password)) {
            throw new UnauthorizedException('Incorrect password.')
        } else {
            return await this.accountService.login(user_id, account.admin);
        }
    }
}
