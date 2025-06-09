import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { LeftType } from '../../tailwind_map_type/layout/left_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[left]',
    standalone: true
})
export class LeftDirective extends BaseTailwindDirective {
  left = input<LeftType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        LEFT: this.left(),
      });
    });
  }
}