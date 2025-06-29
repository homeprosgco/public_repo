import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorBlueType } from '../../tailwind_map_type/typography/color_blue_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorBlue]',
    standalone: true
})
export class ColorBlueDirective extends BaseTailwindDirective {
  colorBlue = input<ColorBlueType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_BLUE: this.colorBlue(),
      });
    });
  }
}