import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './histroy.entity';
import { PartModule } from 'src/part/part.module';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [TypeOrmModule.forFeature([History]), PartModule, AccountModule],
  providers: [HistoryService],
  controllers: [HistoryController]
})
export class HistoryModule {}
