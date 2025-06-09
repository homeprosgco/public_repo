import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftWidthType } from '../../tailwind_map_type/flexbox_grid/border_left_width_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftWidth]',
    standalone: true
})
export class BorderLeftWidthDirective extends BaseTailwindDirective {
  borderLeftWidth = input<BorderLeftWidthType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_WIDTH: this.borderLeftWidth(),
      });
    });
  }
}