import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MinWidthType } from '../../tailwind_map_type/sizing/min_width_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[minWidth]',
    standalone: true
})
export class MinWidthDirective extends BaseTailwindDirective {
  minWidth = input<MinWidthType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MIN_WIDTH: this.minWidth(),
      });
    });
  }
}