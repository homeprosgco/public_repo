import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIG_SERVICE_TOKEN, IConfigService } from '../../../../core/config';
import { Theme } from '../../model';
import { ILoadWebsiteThemeService } from '../../interface';

@Injectable({ providedIn: 'root' })
export class LoadRemoteWebsiteThemeService implements ILoadWebsiteThemeService {
  private config: IConfigService = inject(CONFIG_SERVICE_TOKEN);

  constructor(private http: HttpClient) {}

  fetchTheme$(path: string): Observable<Theme | null> {
    const url = `${this.config.cloudBaseUrl}/${path}`;
    return this.http.get<Theme>(url);
  }
}
