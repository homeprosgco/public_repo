import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackdropGrayscaleType } from '../../tailwind_map_type/filters/backdrop_grayscale_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backdropGrayscale]',
    standalone: true
})
export class BackdropGrayscaleDirective extends BaseTailwindDirective {
  backdropGrayscale = input<BackdropGrayscaleType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKDROP_GRAYSCALE: this.backdropGrayscale(),
      });
    });
  }
}