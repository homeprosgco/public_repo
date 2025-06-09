import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndYellowColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndYellowColor]',
    standalone: true
})
export class BorderInlineEndYellowColorDirective extends BaseTailwindDirective {
  borderInlineEndYellowColor = input<BorderInlineEndYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_YELLOW_COLOR: this.borderInlineEndYellowColor(),
      });
    });
  }
}