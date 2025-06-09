import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartStoneColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartStoneColor]',
    standalone: true
})
export class BorderInlineStartStoneColorDirective extends BaseTailwindDirective {
  borderInlineStartStoneColor = input<BorderInlineStartStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_STONE_COLOR: this.borderInlineStartStoneColor(),
      });
    });
  }
}