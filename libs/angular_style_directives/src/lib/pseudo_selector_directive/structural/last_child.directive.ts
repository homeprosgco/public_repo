import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[sgLastChild]'
  })
  export class LastChildDirective {
    @Input()
    set sgLastChild(value: boolean) {
      this.vcRef.clear();
      if (value) {
        this.vcRef.createEmbeddedView(this.tplRef);
      }
    }
  
    constructor(
      private tplRef: TemplateRef<any>,
      private vcRef: ViewContainerRef
    ) {}
  }
  