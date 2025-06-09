import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorZincType } from '../../tailwind_map_type/typography/color_zinc_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorZinc]',
    standalone: true
})
export class ColorZincDirective extends BaseTailwindDirective {
  colorZinc = input<ColorZincType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_ZINC: this.colorZinc(),
      });
    });
  }
}