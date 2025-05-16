import { Module } from '@nestjs/common';
import { PartService } from './part.service';
import { PartController } from './part.controller';

@Module({
  providers: [PartService],
  controllers: [PartController]
})
export class PartModule {}
