import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackdropBlurType } from '../../tailwind_map_type/filters/backdrop_blur_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backdropBlur]',
    standalone: true
})
export class BackdropBlurDirective extends BaseTailwindDirective {
  backdropBlur = input<BackdropBlurType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKDROP_BLUR: this.backdropBlur(),
      });
    });
  }
}