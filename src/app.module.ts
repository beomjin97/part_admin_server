import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartModule } from './part/part.module';
import { AccountModule } from './account/account.module';
import { HistoryModule } from './history/history.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { CategoryModule } from './category/category.module';
import { LocationModule } from './location/location.module';
import { Part } from './part/part.entity';
import { Account } from './account/account.entity';
import { Category } from './category/category.entity';
import { History } from './history/histroy.entity';
import { Location } from './location/location.entity';
import { Manufacturer } from './manufacturer/manufacturer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test_db',
      entities: [Account, Category, History, Location, Manufacturer, Part],
      synchronize: true,
    }),
    PartModule,
    AccountModule,
    HistoryModule,
    ManufacturerModule,
    CategoryModule,
    LocationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
