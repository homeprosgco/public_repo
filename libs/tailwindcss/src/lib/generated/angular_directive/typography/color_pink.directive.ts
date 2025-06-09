import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorPinkType } from '../../tailwind_map_type/typography/color_pink_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorPink]',
    standalone: true
})
export class ColorPinkDirective extends BaseTailwindDirective {
  colorPink = input<ColorPinkType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_PINK: this.colorPink(),
      });
    });
  }
}