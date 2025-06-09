import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightPinkColorType } from '../../tailwind_map_type/flexbox_grid/border_right_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightPinkColor]',
    standalone: true
})
export class BorderRightPinkColorDirective extends BaseTailwindDirective {
  borderRightPinkColor = input<BorderRightPinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_PINK_COLOR: this.borderRightPinkColor(),
      });
    });
  }
}