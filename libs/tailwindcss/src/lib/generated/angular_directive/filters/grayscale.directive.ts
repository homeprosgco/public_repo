import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GrayscaleType } from '../../tailwind_map_type/filters/grayscale_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[grayscale]',
    standalone: true
})
export class GrayscaleDirective extends BaseTailwindDirective {
  grayscale = input<GrayscaleType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRAYSCALE: this.grayscale(),
      });
    });
  }
}