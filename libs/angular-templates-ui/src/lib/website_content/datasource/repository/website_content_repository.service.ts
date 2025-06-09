import { Injectable, signal, computed, inject } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { WebsiteData } from '../model';
import { ILoadWebsiteContentService } from '../data/interface';
import { LoadLocalWebsiteContentService, LoadRemoteWebsiteContentService } from '../data';
import { CONFIG_SERVICE_TOKEN, IConfigService } from '../../../core/config';

@Injectable({ providedIn: 'root' })
export class WebsiteContentRepository {
  private config: IConfigService = inject(CONFIG_SERVICE_TOKEN);
  private localWebsiteContent: ILoadWebsiteContentService = inject(LoadLocalWebsiteContentService);
  private remoteWebsiteContent: ILoadWebsiteContentService = inject(LoadRemoteWebsiteContentService);

  private contentChannel = new BroadcastChannel('website-content');
  private _content = signal<WebsiteData | null>(null);
  private loadedContentFile = signal<string | null>(null);

  // ✅ Computed getter for safe reactivity
  readonly content = computed(() => this._content());

  constructor() {
    this.listenToBroadcast();
  }

  private listenToBroadcast() {
    this.contentChannel.onmessage = (event) => {
      const data: WebsiteData = event.data;
      this._content.set(data);
    };
  }

  setContent(content: WebsiteData): void {
    this._content.set(content);
    this.contentChannel.postMessage(content);
  }

  // ✅ Load content from local asset or API (depending on env)
  getContent(contentFile: string = 'default_website_content.json') {
    // ✅ Prevent reloading if the requested file is already loaded
    if (this.loadedContentFile() === contentFile && this._content()) {
      return of(this._content());
    }

    const source$ = this.config.isProd
      ? this.remoteWebsiteContent.fetchContent$(contentFile)
      : this.localWebsiteContent
        .fetchContent$(contentFile)
        .pipe(
          catchError((err) => {
            console.warn('❌ Failed to load local dev content', err);
            return of(null);
          })
        );

    return source$.pipe(
      tap((content) => {
        if (content) {
          this.setContent(content);
          this.loadedContentFile.set(contentFile); // ✅ Track which file was loaded
        }
      })
    );
  }
}
