// src/app/core/services/script-loader.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScriptLoaderService {
  private loadedScripts = new Set<string>();

  loadScripts(scripts: string[]): Promise<void> {
    return scripts.reduce((promise, src) => {
      return promise.then(() => this.loadScript(src));
    }, Promise.resolve());
  }

  loadScript(src: string): Promise<void> {
    if (this.loadedScripts.has(src)) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false; // Keep execution order
      script.onload = () => {
        this.loadedScripts.add(src);
        resolve();
      };
      script.onerror = (err) => reject(`Failed to load script: ${src}`);
      document.body.appendChild(script);
    });
  }
}
