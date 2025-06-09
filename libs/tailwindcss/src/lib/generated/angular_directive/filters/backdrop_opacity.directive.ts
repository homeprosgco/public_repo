import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackdropOpacityType } from '../../tailwind_map_type/filters/backdrop_opacity_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backdropOpacity]',
    standalone: true
})
export class BackdropOpacityDirective extends BaseTailwindDirective {
  backdropOpacity = input<BackdropOpacityType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKDROP_OPACITY: this.backdropOpacity(),
      });
    });
  }
}