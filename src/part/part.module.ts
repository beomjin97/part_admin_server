import { Module } from '@nestjs/common';
import { PartService } from './part.service';
import { PartController } from './part.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Part } from './entities/part.entity';
import { CategoryModule } from 'src/category/category.module';
import { LocationModule } from 'src/location/location.module';
import { ManufacturerModule } from 'src/manufacturer/manufacturer.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Part]), 
    CategoryModule, 
    LocationModule, 
    ManufacturerModule
  ],
  providers: [PartService],
  controllers: [PartController],
  exports: [PartService]
})
export class PartModule {}
