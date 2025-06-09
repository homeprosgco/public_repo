import { Module } from '@nestjs/common';
import { CompanyProfileResolver } from './company-profile.resolver';

@Module({providers: [CompanyProfileResolver]})
export class CompanyModule {}
