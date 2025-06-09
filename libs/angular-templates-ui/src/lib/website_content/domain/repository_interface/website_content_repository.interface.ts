// libs/your-lib-path/interface/website-content-repository.interface.ts

import { Observable } from 'rxjs';
import { WebsiteData } from '../../datasource';

export interface IWebsiteContentRepository {
  /**
   * Reactive signal-like getter for current content
   */
  readonly content: () => WebsiteData | null;

  /**
   * Force set the current content and broadcast to all clients
   */
  setContent(content: WebsiteData): void;

  /**
   * Load content from asset or cloud depending on environment.
   * Returns an observable that completes once content is loaded.
   */
  getContent(file?: string): Observable<WebsiteData | null>;
}
