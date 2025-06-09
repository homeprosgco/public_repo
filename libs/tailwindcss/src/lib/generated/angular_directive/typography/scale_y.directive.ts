import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScaleYType } from '../../tailwind_map_type/typography/scale_y_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scaleY]',
    standalone: true
})
export class ScaleYDirective extends BaseTailwindDirective {
  scaleY = input<ScaleYType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCALE_Y: this.scaleY(),
      });
    });
  }
}