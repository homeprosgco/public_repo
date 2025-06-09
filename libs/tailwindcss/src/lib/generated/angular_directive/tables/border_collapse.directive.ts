import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderCollapseType } from '../../tailwind_map_type/tables/border_collapse_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderCollapse]',
    standalone: true
})
export class BorderCollapseDirective extends BaseTailwindDirective {
  borderCollapse = input<BorderCollapseType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_COLLAPSE: this.borderCollapse(),
      });
    });
  }
}