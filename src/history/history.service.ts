import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './histroy.entity';
import { Repository } from 'typeorm';
import { Account } from 'src/account/account.entity';
import { Part } from 'src/part/part.entity';

@Injectable()
export class HistoryService {
    constructor(
        @InjectRepository(History) 
        private readonly histroyRepository: Repository<History>
    ) {}

    createOne (is_import: boolean, date: Date, count: number,part: Part, author: Account):Promise<History> {
        const history = this.histroyRepository.create({
            is_import, 
            date, 
            count, 
            part, 
            account: author
        });
        
        return this.histroyRepository.save(history)
    }

    findOne (id:number) {
        return this.histroyRepository.findOne({where: {
            id
        }})
    }

    findAll () {
        return this.histroyRepository.find()
    }

    findManyByPart(part_id: number): Promise<History[]> {
        return this.histroyRepository.find({
            where: {
                part: {
                    id: part_id
                }
            }
        })
    }

    findManyByAccount(account_id: number): Promise<History[]> {
        return this.histroyRepository.find({
            where: {
                account: {
                    id: account_id
                }
            }
        })
    }
}
