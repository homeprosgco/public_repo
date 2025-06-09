import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackdropContrastType } from '../../tailwind_map_type/filters/backdrop_contrast_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backdropContrast]',
    standalone: true
})
export class BackdropContrastDirective extends BaseTailwindDirective {
  backdropContrast = input<BackdropContrastType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKDROP_CONTRAST: this.backdropContrast(),
      });
    });
  }
}