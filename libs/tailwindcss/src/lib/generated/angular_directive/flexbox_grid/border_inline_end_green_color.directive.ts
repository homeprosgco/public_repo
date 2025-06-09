import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndGreenColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndGreenColor]',
    standalone: true
})
export class BorderInlineEndGreenColorDirective extends BaseTailwindDirective {
  borderInlineEndGreenColor = input<BorderInlineEndGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_GREEN_COLOR: this.borderInlineEndGreenColor(),
      });
    });
  }
}