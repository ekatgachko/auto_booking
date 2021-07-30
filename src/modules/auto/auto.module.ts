import { Module } from '@nestjs/common';
import { AutoController } from 'src/modules/auto/autoController';
import { AutoService } from './auto.service';
import { AutoRepository } from './auto.repository';
import { DbClientServicesModule } from '../../common';

@Module({
  imports: [DbClientServicesModule],
  controllers: [AutoController],
  providers: [AutoService, AutoRepository],
})
export class AutoModule {}
