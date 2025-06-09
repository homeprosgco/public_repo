import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorType } from '../../tailwind_map_type/typography/color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[color]',
    standalone: true
})
export class ColorDirective extends BaseTailwindDirective {
  color = input<ColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR: this.color(),
      });
    });
  }
}