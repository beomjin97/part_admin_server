import { Module } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manufacturer } from './manufacturer.entity';
import { ManufacturerController } from './manufacturer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Manufacturer])],
  providers: [ManufacturerService],
  controllers: [ManufacturerController]
})
export class ManufacturerModule {}
