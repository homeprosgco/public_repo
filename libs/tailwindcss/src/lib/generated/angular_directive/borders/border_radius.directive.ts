import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRadiusType } from '../../tailwind_map_type/borders/border_radius_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRadius]',
    standalone: true
})
export class BorderRadiusDirective extends BaseTailwindDirective {
  borderRadius = input<BorderRadiusType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RADIUS: this.borderRadius(),
      });
    });
  }
}