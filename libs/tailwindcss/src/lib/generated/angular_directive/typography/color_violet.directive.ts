import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorVioletType } from '../../tailwind_map_type/typography/color_violet_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorViolet]',
    standalone: true
})
export class ColorVioletDirective extends BaseTailwindDirective {
  colorViolet = input<ColorVioletType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_VIOLET: this.colorViolet(),
      });
    });
  }
}