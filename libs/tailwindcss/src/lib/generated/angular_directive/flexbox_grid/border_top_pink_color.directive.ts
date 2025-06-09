import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopPinkColorType } from '../../tailwind_map_type/flexbox_grid/border_top_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopPinkColor]',
    standalone: true
})
export class BorderTopPinkColorDirective extends BaseTailwindDirective {
  borderTopPinkColor = input<BorderTopPinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_PINK_COLOR: this.borderTopPinkColor(),
      });
    });
  }
}