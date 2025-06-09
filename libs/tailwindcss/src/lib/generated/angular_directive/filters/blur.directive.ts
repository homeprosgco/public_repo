import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BlurType } from '../../tailwind_map_type/filters/blur_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[blur]',
    standalone: true
})
export class BlurDirective extends BaseTailwindDirective {
  blur = input<BlurType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BLUR: this.blur(),
      });
    });
  }
}