import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorCyanType } from '../../tailwind_map_type/typography/color_cyan_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorCyan]',
    standalone: true
})
export class ColorCyanDirective extends BaseTailwindDirective {
  colorCyan = input<ColorCyanType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_CYAN: this.colorCyan(),
      });
    });
  }
}