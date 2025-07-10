import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './entities/histroy.entity';
import { Repository } from 'typeorm';
import { Account } from 'src/account/entities/account.entity';
import { Part } from 'src/part/entities/part.entity';
import { createHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoryService {
    constructor(
        @InjectRepository(History) 
        private readonly histroyRepository: Repository<History>
    ) {}

    createOne (createHistoryDto: createHistoryDto,part: Part, author: Account):Promise<History> {
        const {is_import, date, count} = createHistoryDto;
        
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
