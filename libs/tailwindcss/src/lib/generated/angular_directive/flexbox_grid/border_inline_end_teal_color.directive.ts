import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndTealColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndTealColor]',
    standalone: true
})
export class BorderInlineEndTealColorDirective extends BaseTailwindDirective {
  borderInlineEndTealColor = input<BorderInlineEndTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_TEAL_COLOR: this.borderInlineEndTealColor(),
      });
    });
  }
}