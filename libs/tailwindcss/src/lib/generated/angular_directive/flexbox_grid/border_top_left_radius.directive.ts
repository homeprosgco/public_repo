import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopLeftRadiusType } from '../../tailwind_map_type/flexbox_grid/border_top_left_radius_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopLeftRadius]',
    standalone: true
})
export class BorderTopLeftRadiusDirective extends BaseTailwindDirective {
  borderTopLeftRadius = input<BorderTopLeftRadiusType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_LEFT_RADIUS: this.borderTopLeftRadius(),
      });
    });
  }
}