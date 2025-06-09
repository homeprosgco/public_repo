import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderStartStartRadiusType } from '../../tailwind_map_type/flexbox_grid/border_start_start_radius_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderStartStartRadius]',
    standalone: true
})
export class BorderStartStartRadiusDirective extends BaseTailwindDirective {
  borderStartStartRadius = input<BorderStartStartRadiusType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_START_START_RADIUS: this.borderStartStartRadius(),
      });
    });
  }
}