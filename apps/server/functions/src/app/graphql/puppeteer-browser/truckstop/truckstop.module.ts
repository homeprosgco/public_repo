import { Module } from '@nestjs/common';
import { PuppeteerProviderModule } from '../puppeteer-provider/puppeteer-provider.module';
import { TruckstopListenerService } from './listener/truckstop-listener.service';
import { TruckstopResolver } from './truckstop.resolver';
import { TruckstopService } from './truckstop.service';

@Module({
  imports: [PuppeteerProviderModule],
  providers: [TruckstopService, TruckstopResolver, TruckstopListenerService]
})
export class TruckstopModule {}
