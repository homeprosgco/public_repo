import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AspectRatioType } from '../../tailwind_map_type/layout/aspect_ratio_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[aspectRatio]',
    standalone: true
})
export class AspectRatioDirective extends BaseTailwindDirective {
  aspectRatio = input<AspectRatioType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ASPECT_RATIO: this.aspectRatio(),
      });
    });
  }
}