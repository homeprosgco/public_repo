import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RavixComponent } from '../ravix/ravix.component';
import { HadimanComponent } from '../hadiman/hadiman.component';
import { HandymanOneComponent } from '../handyman_one/handyman_one.component';
import { HmendSiteWrapperComponent } from '../hmend/hmend-site-wrapper.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [CommonModule],
  selector: 'app-website-template-router-outlet',
  standalone: true,
  template: `
    <ng-container *ngComponentOutlet="componentToRender"></ng-container>
  `,
})
export class WebsiteTemplateRouterOutletComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);
  readonly paramMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  readonly websiteTemplate = computed(() => this.paramMap().get('website-template') || '');

  componentToRender: any;

  private componentMap: Record<string, any> = {
    ravix: RavixComponent,
    hadiman: HadimanComponent,
    "handyman-one": HandymanOneComponent,
    "hmend": HmendSiteWrapperComponent
  };

  ngOnInit() {
    this.componentToRender = this.componentMap[this.websiteTemplate()] || HandymanOneComponent;
  }
}
