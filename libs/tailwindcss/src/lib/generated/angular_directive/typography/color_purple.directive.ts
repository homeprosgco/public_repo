import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorPurpleType } from '../../tailwind_map_type/typography/color_purple_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorPurple]',
    standalone: true
})
export class ColorPurpleDirective extends BaseTailwindDirective {
  colorPurple = input<ColorPurpleType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_PURPLE: this.colorPurple(),
      });
    });
  }
}