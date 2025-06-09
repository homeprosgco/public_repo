import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomWidthType } from '../../tailwind_map_type/flexbox_grid/border_bottom_width_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomWidth]',
    standalone: true
})
export class BorderBottomWidthDirective extends BaseTailwindDirective {
  borderBottomWidth = input<BorderBottomWidthType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_WIDTH: this.borderBottomWidth(),
      });
    });
  }
}