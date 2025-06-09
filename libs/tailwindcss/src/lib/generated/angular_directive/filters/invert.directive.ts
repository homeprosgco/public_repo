import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { InvertType } from '../../tailwind_map_type/filters/invert_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[invert]',
    standalone: true
})
export class InvertDirective extends BaseTailwindDirective {
  invert = input<InvertType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        INVERT: this.invert(),
      });
    });
  }
}