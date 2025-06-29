import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorGreenType } from '../../tailwind_map_type/typography/color_green_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorGreen]',
    standalone: true
})
export class ColorGreenDirective extends BaseTailwindDirective {
  colorGreen = input<ColorGreenType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_GREEN: this.colorGreen(),
      });
    });
  }
}