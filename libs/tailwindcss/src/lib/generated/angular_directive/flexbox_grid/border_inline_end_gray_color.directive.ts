import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndGrayColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndGrayColor]',
    standalone: true
})
export class BorderInlineEndGrayColorDirective extends BaseTailwindDirective {
  borderInlineEndGrayColor = input<BorderInlineEndGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_GRAY_COLOR: this.borderInlineEndGrayColor(),
      });
    });
  }
}