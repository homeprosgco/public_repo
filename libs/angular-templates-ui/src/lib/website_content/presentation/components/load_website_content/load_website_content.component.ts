import { inject, computed, effect, Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { IWebsiteContentRepository, WEBSITE_CONTENT_REPOSITORY_SERVICE_TOKEN } from '../../../domain/repository_interface';
import { WebsiteContentRepository } from '../../../datasource';

@Component({
  standalone: true,
  selector: 'sg-website-content-loader',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  providers: [{provide: WEBSITE_CONTENT_REPOSITORY_SERVICE_TOKEN, useClass: WebsiteContentRepository}]
})
export class LoadWebsiteContentComponent {
  private readonly contentRepo: IWebsiteContentRepository = inject(WEBSITE_CONTENT_REPOSITORY_SERVICE_TOKEN);
  readonly content = this.contentRepo.content();

  private readonly route = inject(ActivatedRoute);
  readonly paramMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  readonly contentFile = computed(() => this.paramMap().get('website-content'));

  // ✅ Runs as soon as Angular instantiates the component (in injection context)
  constructor() {
    effect(() => {

      const file = this.contentFile();
      if (file) {
        this.contentRepo.getContent(`${file}.json`).subscribe();
      }
    });
  }
}
