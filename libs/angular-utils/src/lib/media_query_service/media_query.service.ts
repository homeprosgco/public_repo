import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MediaQueryService {
  private listeners = new Map<string, () => void>();

  /**
   * Watches a media query and returns a reactive signal of whether it matches.
   * @param query The media query string (e.g. "(max-width: 767px)")
   */
  watch(query: string) {
    const mql = window.matchMedia(query);
    const match = signal(mql.matches);

    const listener = (event: MediaQueryListEvent) => {
      match.set(event.matches);
    };

    mql.addEventListener('change', listener);
    this.listeners.set(query, () =>
      mql.removeEventListener('change', listener)
    );

    return match;
  }

  /**
   * Clean up any listener manually if needed.
   */
  unwatch(query: string) {
    const remove = this.listeners.get(query);
    if (remove) {
      remove();
      this.listeners.delete(query);
    }
  }
}
