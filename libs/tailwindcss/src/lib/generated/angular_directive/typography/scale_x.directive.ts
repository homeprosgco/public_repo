import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScaleXType } from '../../tailwind_map_type/typography/scale_x_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scaleX]',
    standalone: true
})
export class ScaleXDirective extends BaseTailwindDirective {
  scaleX = input<ScaleXType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCALE_X: this.scaleX(),
      });
    });
  }
}