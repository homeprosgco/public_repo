// config.token.ts
import { InjectionToken } from '@angular/core';
import { IConfigService } from '../interface/config.interface';

export const CONFIG_SERVICE_TOKEN = new InjectionToken<IConfigService>('CONFIG_SERVICE');
