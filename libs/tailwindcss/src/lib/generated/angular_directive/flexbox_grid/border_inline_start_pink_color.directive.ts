import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartPinkColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartPinkColor]',
    standalone: true
})
export class BorderInlineStartPinkColorDirective extends BaseTailwindDirective {
  borderInlineStartPinkColor = input<BorderInlineStartPinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_PINK_COLOR: this.borderInlineStartPinkColor(),
      });
    });
  }
}