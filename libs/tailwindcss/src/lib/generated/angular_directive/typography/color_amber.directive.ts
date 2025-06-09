import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorAmberType } from '../../tailwind_map_type/typography/color_amber_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorAmber]',
    standalone: true
})
export class ColorAmberDirective extends BaseTailwindDirective {
  colorAmber = input<ColorAmberType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_AMBER: this.colorAmber(),
      });
    });
  }
}