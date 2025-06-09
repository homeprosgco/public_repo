import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sgFirstChild]',
})
export class FirstChildDirective {
  @Input()
  set sgFirstChild(value: boolean) {
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
