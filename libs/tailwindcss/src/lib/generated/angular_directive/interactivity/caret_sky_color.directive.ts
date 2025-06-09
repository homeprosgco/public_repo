import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretSkyColorType } from '../../tailwind_map_type/interactivity/caret_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretSkyColor]',
    standalone: true
})
export class CaretSkyColorDirective extends BaseTailwindDirective {
  caretSkyColor = input<CaretSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_SKY_COLOR: this.caretSkyColor(),
      });
    });
  }
}