import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAssetsService } from './interface/assets_service.interface';

@Injectable({ providedIn: 'root' })
export class AssetsService implements IAssetsService {

  constructor(private http: HttpClient) { }

  get<T = any>(relativePath: string): Observable<T> {

    const url = `${relativePath}`;
    console.log('📦 Loading asset from:', url);
    return this.http.get<T>(url);
  }
}
