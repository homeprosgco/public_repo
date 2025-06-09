import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndOrangeColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndOrangeColor]',
    standalone: true
})
export class BorderInlineEndOrangeColorDirective extends BaseTailwindDirective {
  borderInlineEndOrangeColor = input<BorderInlineEndOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_ORANGE_COLOR: this.borderInlineEndOrangeColor(),
      });
    });
  }
}