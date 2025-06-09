import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndCyanColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_cyan_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndCyanColor]',
    standalone: true
})
export class BorderInlineEndCyanColorDirective extends BaseTailwindDirective {
  borderInlineEndCyanColor = input<BorderInlineEndCyanColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_CYAN_COLOR: this.borderInlineEndCyanColor(),
      });
    });
  }
}