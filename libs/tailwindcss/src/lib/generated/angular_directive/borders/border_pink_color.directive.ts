import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderPinkColorType } from '../../tailwind_map_type/borders/border_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderPinkColor]',
    standalone: true
})
export class BorderPinkColorDirective extends BaseTailwindDirective {
  borderPinkColor = input<BorderPinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_PINK_COLOR: this.borderPinkColor(),
      });
    });
  }
}