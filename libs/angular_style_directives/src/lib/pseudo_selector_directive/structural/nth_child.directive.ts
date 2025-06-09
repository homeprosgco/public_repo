import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sgNthChild]',
})
export class NthChildDirective {
  @Input()
  set sgNthChild(index: string | number) {
    this.vcRef.clear();
    if (parseInt(index as string, 10) === this.contextIndex + 1) {
      this.vcRef.createEmbeddedView(this.tplRef);
    }
  }

  constructor(
    private tplRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  private get contextIndex(): number {
    const parent = this.vcRef.element.nativeElement.parentNode;
    const children = Array.from(parent.children);
    return children.indexOf(this.vcRef.element.nativeElement);
  }
}
