import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-temp',
  template: `<router-outlet></router-outlet>`
})

export class TempAppComponent implements AfterViewInit, OnDestroy {
  constructor() { }

  ngAfterViewInit() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/temp/dashlite.min.css';
    link.id = 'temp-dashlite-stylesheet';

    document.querySelector('head')?.append(link);
    document.querySelector('.nk-header')?.classList.remove('is-theme');
    document.querySelector('.nk-header')?.classList.add('nk-header-fixed', 'is-light')
  }

  ngOnDestroy() {
    document.getElementById('temp-dashlite-stylesheet')?.remove();
  }
}