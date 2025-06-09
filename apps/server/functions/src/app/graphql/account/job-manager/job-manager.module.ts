import { Module } from '@nestjs/common';
import { JobLeadModule } from './job-lead/job-lead.module';
import { JobModule } from './job/job.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [JobLeadModule, JobModule, ProjectModule]
})
export class JobManagerModule {}
