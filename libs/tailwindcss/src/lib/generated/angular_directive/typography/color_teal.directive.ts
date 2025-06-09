import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorTealType } from '../../tailwind_map_type/typography/color_teal_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorTeal]',
    standalone: true
})
export class ColorTealDirective extends BaseTailwindDirective {
  colorTeal = input<ColorTealType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_TEAL: this.colorTeal(),
      });
    });
  }
}