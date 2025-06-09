import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndPurpleColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndPurpleColor]',
    standalone: true
})
export class BorderInlineEndPurpleColorDirective extends BaseTailwindDirective {
  borderInlineEndPurpleColor = input<BorderInlineEndPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_PURPLE_COLOR: this.borderInlineEndPurpleColor(),
      });
    });
  }
}