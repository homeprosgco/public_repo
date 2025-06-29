import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackdropSaturateType } from '../../tailwind_map_type/filters/backdrop_saturate_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backdropSaturate]',
    standalone: true
})
export class BackdropSaturateDirective extends BaseTailwindDirective {
  backdropSaturate = input<BackdropSaturateType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKDROP_SATURATE: this.backdropSaturate(),
      });
    });
  }
}