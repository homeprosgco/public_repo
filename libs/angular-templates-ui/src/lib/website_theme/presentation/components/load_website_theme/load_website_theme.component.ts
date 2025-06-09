import { inject, computed, effect, Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {
  IWebsiteThemeRepository,
  WEBSITE_THEME_REPOSITORY_SERVICE_TOKEN,
} from '../../../domain';
import { ThemeRepository } from '../../../datasource/repository/theme_repository.service';

@Component({
  standalone: true,
  selector: 'sg-theme-loader',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  providers: [
    {
      provide: WEBSITE_THEME_REPOSITORY_SERVICE_TOKEN,
      useClass: ThemeRepository,
    },
  ],
})
export class LoadWebsiteThemeComponent {
  private themeRepository: IWebsiteThemeRepository = inject(
    WEBSITE_THEME_REPOSITORY_SERVICE_TOKEN
  );
  private readonly route = inject(ActivatedRoute);

  readonly paramMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  readonly themeFile = computed(() => this.paramMap().get('theme'));

  // ✅ Runs as soon as Angular instantiates the component (in injection context)
  constructor() {
    effect(() => {
      const file = this.themeFile();
      
      if (file) {
        this.themeRepository.getTheme(`${file}.json`).subscribe();
      } else {
        this.themeRepository.getTheme().subscribe();
      }
    });
  }
}
