import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderStartEndRadiusType } from '../../tailwind_map_type/flexbox_grid/border_start_end_radius_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderStartEndRadius]',
    standalone: true
})
export class BorderStartEndRadiusDirective extends BaseTailwindDirective {
  borderStartEndRadius = input<BorderStartEndRadiusType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_START_END_RADIUS: this.borderStartEndRadius(),
      });
    });
  }
}