// libs/your-lib-path/interface/assets-service.interface.ts

import { Observable } from 'rxjs';

export interface IAssetsService {
  get<T = any>(relativePath: string): Observable<T>;
}
