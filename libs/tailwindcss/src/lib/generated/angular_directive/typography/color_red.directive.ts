import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorRedType } from '../../tailwind_map_type/typography/color_red_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorRed]',
    standalone: true
})
export class ColorRedDirective extends BaseTailwindDirective {
  colorRed = input<ColorRedType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_RED: this.colorRed(),
      });
    });
  }
}