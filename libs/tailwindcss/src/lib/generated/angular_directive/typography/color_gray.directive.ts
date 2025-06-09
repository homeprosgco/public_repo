import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorGrayType } from '../../tailwind_map_type/typography/color_gray_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorGray]',
    standalone: true
})
export class ColorGrayDirective extends BaseTailwindDirective {
  colorGray = input<ColorGrayType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_GRAY: this.colorGray(),
      });
    });
  }
}