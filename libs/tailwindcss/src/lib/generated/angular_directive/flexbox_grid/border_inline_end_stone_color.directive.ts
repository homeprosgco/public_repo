import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndStoneColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndStoneColor]',
    standalone: true
})
export class BorderInlineEndStoneColorDirective extends BaseTailwindDirective {
  borderInlineEndStoneColor = input<BorderInlineEndStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_STONE_COLOR: this.borderInlineEndStoneColor(),
      });
    });
  }
}