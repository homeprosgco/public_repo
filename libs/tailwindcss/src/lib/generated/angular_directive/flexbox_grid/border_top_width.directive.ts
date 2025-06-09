import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopWidthType } from '../../tailwind_map_type/flexbox_grid/border_top_width_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopWidth]',
    standalone: true
})
export class BorderTopWidthDirective extends BaseTailwindDirective {
  borderTopWidth = input<BorderTopWidthType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_WIDTH: this.borderTopWidth(),
      });
    });
  }
}