import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomPinkColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomPinkColor]',
    standalone: true
})
export class BorderBottomPinkColorDirective extends BaseTailwindDirective {
  borderBottomPinkColor = input<BorderBottomPinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_PINK_COLOR: this.borderBottomPinkColor(),
      });
    });
  }
}