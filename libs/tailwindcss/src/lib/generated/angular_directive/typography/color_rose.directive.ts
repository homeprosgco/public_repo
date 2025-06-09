import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorRoseType } from '../../tailwind_map_type/typography/color_rose_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorRose]',
    standalone: true
})
export class ColorRoseDirective extends BaseTailwindDirective {
  colorRose = input<ColorRoseType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_ROSE: this.colorRose(),
      });
    });
  }
}