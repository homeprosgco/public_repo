import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FloatType } from '../../tailwind_map_type/layout/float_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[float]',
    standalone: true
})
export class FloatDirective extends BaseTailwindDirective {
  float = input<FloatType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FLOAT: this.float(),
      });
    });
  }
}