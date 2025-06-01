import { Module } from '@nestjs/common';
import { PartService } from './part.service';
import { PartController } from './part.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Part } from './part.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Part])],
  providers: [PartService],
  controllers: [PartController],
  exports: [PartService]
})
export class PartModule {}
