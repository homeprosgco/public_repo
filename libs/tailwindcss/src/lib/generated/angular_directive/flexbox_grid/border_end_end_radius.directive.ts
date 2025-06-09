import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderEndEndRadiusType } from '../../tailwind_map_type/flexbox_grid/border_end_end_radius_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderEndEndRadius]',
    standalone: true
})
export class BorderEndEndRadiusDirective extends BaseTailwindDirective {
  borderEndEndRadius = input<BorderEndEndRadiusType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_END_END_RADIUS: this.borderEndEndRadius(),
      });
    });
  }
}