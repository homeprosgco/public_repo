// libs/your-lib-path/interface/load-website-content.interface.ts

import { Observable } from 'rxjs';
import { WebsiteData } from '../../model';

export interface ILoadWebsiteContentService {
  /**
   * Fetches website content JSON from a given cloud path.
   * Returns null if the request fails or content is missing.
   *
   * @param file The JSON file to fetch (defaults to 'home-content.json')
   */
  fetchContent$(file?: string): Observable<WebsiteData | null>;
}
