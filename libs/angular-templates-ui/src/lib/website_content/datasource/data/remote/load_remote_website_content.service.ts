// load_website_content.service.ts
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, Observable } from 'rxjs';
import { ILoadWebsiteContentService } from '../interface';
import { CONFIG_SERVICE_TOKEN, IConfigService } from '../../../../core/config';
import { WebsiteData } from '../../model';

@Injectable({ providedIn: 'root' })
export class LoadRemoteWebsiteContentService
  implements ILoadWebsiteContentService
{
  constructor(
    private http: HttpClient,
    @Inject(CONFIG_SERVICE_TOKEN) private config: IConfigService
  ) {}

  fetchContent$(
    file: string = 'home-content.json'
  ): Observable<WebsiteData | null> {
    const url = `${this.config.cloudBaseUrl}/${file}`;
    return this.http.get<WebsiteData>(url).pipe(
      catchError((error) => {
        console.warn(`❌ Failed to fetch cloud content "${file}"`, error);
        return of(null);
      })
    );
  }
}
