import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorOrangeType } from '../../tailwind_map_type/typography/color_orange_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorOrange]',
    standalone: true
})
export class ColorOrangeDirective extends BaseTailwindDirective {
  colorOrange = input<ColorOrangeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_ORANGE: this.colorOrange(),
      });
    });
  }
}