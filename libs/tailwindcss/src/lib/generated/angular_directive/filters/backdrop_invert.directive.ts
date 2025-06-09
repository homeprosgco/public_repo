import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackdropInvertType } from '../../tailwind_map_type/filters/backdrop_invert_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backdropInvert]',
    standalone: true
})
export class BackdropInvertDirective extends BaseTailwindDirective {
  backdropInvert = input<BackdropInvertType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKDROP_INVERT: this.backdropInvert(),
      });
    });
  }
}