import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account.entity';

@Module({
  imports: [
    JwtModule.register({
    secret: 'test',
    signOptions: { expiresIn: '1h'}
  }),
    TypeOrmModule.forFeature([Account])
  ],
  controllers: [AccountController],
  providers: [AccountService, JwtStrategy]
})
export class AccountModule {}
