import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sgFirstOfType]',
})
export class FirstOfTypeDirective {
  @Input()
  set sgFirstOfType(value: boolean | '') {
    const el = this.vcRef.element.nativeElement;
    const tagName = el.tagName;
    const siblings = Array.from(el.parentNode.children).filter(
      (sibling: any) => sibling.tagName === tagName
    );
    const isFirst = siblings[0] === el;

    this.vcRef.clear();
    if (isFirst && (value === true || value === '')) {
      this.vcRef.createEmbeddedView(this.tplRef);
    }
  }

  constructor(
    private tplRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
