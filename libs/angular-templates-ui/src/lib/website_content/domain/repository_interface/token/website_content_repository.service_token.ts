// config.token.ts
import { InjectionToken } from '@angular/core';
import { IWebsiteContentRepository } from '../website_content_repository.interface';

export const WEBSITE_CONTENT_REPOSITORY_SERVICE_TOKEN = new InjectionToken<IWebsiteContentRepository>('WEBSITE_CONTENT_REPOSITORY_SERVICE_TOKEN');
