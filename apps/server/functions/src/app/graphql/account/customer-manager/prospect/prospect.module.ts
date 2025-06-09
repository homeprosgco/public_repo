import { Module } from '@nestjs/common';
import { ProspectResolver } from './prospect.resolver';

@Module({
  providers: [ProspectResolver]
})
export class ProspectModule { }
