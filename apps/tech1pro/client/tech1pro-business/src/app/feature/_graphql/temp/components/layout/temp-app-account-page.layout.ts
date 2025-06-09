import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-account-page-layout',
  template: `
    <div class="nk-app-root">
      <!-- wrap @s -->
      <div class="nk-wrap ">
        <!-- main header @s -->
        <div class="nk-header nk-header-fluid is-theme">
          <app-temp-page-header></app-temp-page-header>
        </div>
        <!-- main header @e -->
        <!-- content @s -->
        <div class="nk-content nk-content-fluid">
            <div class="container-xl wide-xl">
                <div class="nk-content-inner">
                    <div class="nk-content-body">
                      <router-outlet></router-outlet>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- wrap @e -->
    </div>
  `
})

export class TempAppAccountPageLayoutComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit() {
    document.querySelector('body')?.classList.add('nk-body', 'npc-invest', 'bg-lighter');
  }
}