import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndVioletColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndVioletColor]',
    standalone: true
})
export class BorderInlineEndVioletColorDirective extends BaseTailwindDirective {
  borderInlineEndVioletColor = input<BorderInlineEndVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_VIOLET_COLOR: this.borderInlineEndVioletColor(),
      });
    });
  }
}