import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountService {
    constructor(
        private jwtService: JwtService, 
        @InjectRepository(Account) private accountRepository: Repository<Account>,
    ) { }

    findAccount(user_id: string ): Promise<Account | null> {
        return this.accountRepository.findOne({
            where: {user_id}
        })
    }

    comparePassword(password:string, hashed:string):Promise<boolean> {
        return bcrypt.compare(password, hashed);
    }

    async createAccount(user_id:string, password:string, admin:boolean): Promise<Account> {
        const saltRounds = 10
        const hashed = await bcrypt.hash(password, saltRounds)
        const account = this.accountRepository.create({
            user_id,
            password: hashed,
            admin,
        })

        return this.accountRepository.save(account)
    }

    async login(user_id: string, admin: boolean) {
        const payload = {user_id, admin}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
