// load_website_content.service.ts
import { Inject, Injectable } from '@angular/core';
import { catchError, of, Observable } from 'rxjs';
import { WebsiteData } from '../../model/website_data.interface';
import { ILoadWebsiteContentService } from '../interface';
import {
  ASSETS_SERVICE_TOKEN,
  IAssetsService,
} from '@public-repo/angular-utils';

@Injectable({ providedIn: 'root' })
export class LoadLocalWebsiteContentService
  implements ILoadWebsiteContentService {
  constructor(
    @Inject(ASSETS_SERVICE_TOKEN) private assets: IAssetsService
  ) { }

  fetchContent$(
    file: string = 'default_website_content.json'
  ): Observable<WebsiteData | null> {
    return this.assets.get<WebsiteData>(`assets/template_content/${file}`).pipe(
      catchError((err) => {
        console.warn('❌ Failed to load local dev content', err);
        return of(null);
      })
    );
  }
}
