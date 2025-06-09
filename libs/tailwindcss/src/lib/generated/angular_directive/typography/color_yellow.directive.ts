import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorYellowType } from '../../tailwind_map_type/typography/color_yellow_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorYellow]',
    standalone: true
})
export class ColorYellowDirective extends BaseTailwindDirective {
  colorYellow = input<ColorYellowType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_YELLOW: this.colorYellow(),
      });
    });
  }
}