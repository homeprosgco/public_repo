import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderEndStartRadiusType } from '../../tailwind_map_type/flexbox_grid/border_end_start_radius_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderEndStartRadius]',
    standalone: true
})
export class BorderEndStartRadiusDirective extends BaseTailwindDirective {
  borderEndStartRadius = input<BorderEndStartRadiusType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_END_START_RADIUS: this.borderEndStartRadius(),
      });
    });
  }
}