import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndPinkColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndPinkColor]',
    standalone: true
})
export class BorderInlineEndPinkColorDirective extends BaseTailwindDirective {
  borderInlineEndPinkColor = input<BorderInlineEndPinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_PINK_COLOR: this.borderInlineEndPinkColor(),
      });
    });
  }
}