import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteQueryService {
  constructor(private route: ActivatedRoute) {}

  getRawFilters(): Record<string, string | string[]> {
    const map = this.route.snapshot.queryParamMap;
    const result: Record<string, string | string[]> = {};

    map.keys
      .filter((key) => !key.startsWith('include'))
      .forEach((key) => {
        const allValues = map.getAll(key);
        result[key] = allValues.length === 1 ? allValues[0] : allValues;
      });

    return result;
  }

  getRawIncludes(): Record<string, boolean> {
    const map = this.route.snapshot.queryParamMap;
    const result: Record<string, boolean> = {};

    map.keys
      .filter((key) => key.startsWith('include'))
      .forEach((key) => {
        result[key] = map.get(key) === 'true';
      });

    return result;
  }
}
