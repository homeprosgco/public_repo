import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderSpacingYType } from '../../tailwind_map_type/tables/border_spacing_y_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderSpacingY]',
    standalone: true
})
export class BorderSpacingYDirective extends BaseTailwindDirective {
  borderSpacingY = input<BorderSpacingYType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_SPACING_Y: this.borderSpacingY(),
      });
    });
  }
}