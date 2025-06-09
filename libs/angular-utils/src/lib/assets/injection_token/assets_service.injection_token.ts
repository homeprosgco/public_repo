// config.token.ts
import { InjectionToken } from '@angular/core';
import { IAssetsService } from '../interface/assets_service.interface';

export const ASSETS_SERVICE_TOKEN = new InjectionToken<IAssetsService>('ASSETS_SERVICE');
