import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[sgNthOfType]'
  })
  export class NthOfTypeDirective {
    @Input()
    set sgNthOfType(index: string | number) {
      this.vcRef.clear();
      const el = this.vcRef.element.nativeElement;
      const tag = el.tagName;
      const siblings = Array.from(el.parentNode.children).filter(
        (n: any) => n.tagName === tag
      );
      const position = siblings.indexOf(el);
  
      if (position === parseInt(index as string, 10) - 1) {
        this.vcRef.createEmbeddedView(this.tplRef);
      }
    }
  
    constructor(
      private tplRef: TemplateRef<any>,
      private vcRef: ViewContainerRef
    ) {}
  }
  