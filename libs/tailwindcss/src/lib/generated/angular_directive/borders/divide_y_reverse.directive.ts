import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { DivideYReverseType } from '../../tailwind_map_type/borders/divide_y_reverse_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[divideYReverse]',
    standalone: true
})
export class DivideYReverseDirective extends BaseTailwindDirective {
  divideYReverse = input<DivideYReverseType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        DIVIDE_Y_REVERSE: this.divideYReverse(),
      });
    });
  }
}