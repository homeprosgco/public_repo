import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomRightRadiusType } from '../../tailwind_map_type/flexbox_grid/border_bottom_right_radius_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomRightRadius]',
    standalone: true
})
export class BorderBottomRightRadiusDirective extends BaseTailwindDirective {
  borderBottomRightRadius = input<BorderBottomRightRadiusType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_RIGHT_RADIUS: this.borderBottomRightRadius(),
      });
    });
  }
}