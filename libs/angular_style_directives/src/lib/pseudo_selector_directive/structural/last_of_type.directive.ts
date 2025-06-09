import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sgLastOfType]',
})
export class LastOfTypeDirective {
  @Input()
  set sgLastOfType(value: boolean | '') {
    const el = this.vcRef.element.nativeElement;
    const tagName = el.tagName;
    const siblings = Array.from(el.parentNode.children).filter(
      (sibling: any) => sibling.tagName === tagName
    );
    const isLast = siblings[siblings.length - 1] === el;

    this.vcRef.clear();
    if (isLast && (value === true || value === '')) {
      this.vcRef.createEmbeddedView(this.tplRef);
    }
  }

  constructor(
    private tplRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
