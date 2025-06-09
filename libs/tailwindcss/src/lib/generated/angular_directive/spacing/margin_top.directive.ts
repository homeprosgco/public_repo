import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MarginTopType } from '../../tailwind_map_type/spacing/margin_top_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[marginTop]',
    standalone: true
})
export class MarginTopDirective extends BaseTailwindDirective {
  marginTop = input<MarginTopType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MARGIN_TOP: this.marginTop(),
      });
    });
  }
}