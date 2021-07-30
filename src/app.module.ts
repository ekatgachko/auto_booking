import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { PriceModule } from './modules/price/price.module';
import { BookingModule } from './modules/booking/booking.module';
import { AccountModule } from './modules/report/account.module';
import { AutoModule } from './modules/auto/auto.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PriceModule,
    BookingModule,
    AccountModule,
    AutoModule,
  ],
})
export class AppModule {}
