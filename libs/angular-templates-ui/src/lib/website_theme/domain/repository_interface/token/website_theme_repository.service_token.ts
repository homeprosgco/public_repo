// config.token.ts
import { InjectionToken } from '@angular/core';
import { IWebsiteThemeRepository } from '../website_theme_repository.interface';

export const WEBSITE_THEME_REPOSITORY_SERVICE_TOKEN = new InjectionToken<IWebsiteThemeRepository>('WEBSITE_THEME_REPOSITORY_SERVICE_TOKEN');
