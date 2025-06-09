import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftPinkColorType } from '../../tailwind_map_type/flexbox_grid/border_left_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftPinkColor]',
    standalone: true
})
export class BorderLeftPinkColorDirective extends BaseTailwindDirective {
  borderLeftPinkColor = input<BorderLeftPinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_PINK_COLOR: this.borderLeftPinkColor(),
      });
    });
  }
}