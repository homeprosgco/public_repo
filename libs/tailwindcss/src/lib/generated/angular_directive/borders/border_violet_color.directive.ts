import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderVioletColorType } from '../../tailwind_map_type/borders/border_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderVioletColor]',
    standalone: true
})
export class BorderVioletColorDirective extends BaseTailwindDirective {
  borderVioletColor = input<BorderVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_VIOLET_COLOR: this.borderVioletColor(),
      });
    });
  }
}