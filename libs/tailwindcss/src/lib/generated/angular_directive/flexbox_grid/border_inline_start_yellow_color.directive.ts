import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartYellowColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartYellowColor]',
    standalone: true
})
export class BorderInlineStartYellowColorDirective extends BaseTailwindDirective {
  borderInlineStartYellowColor = input<BorderInlineStartYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_YELLOW_COLOR: this.borderInlineStartYellowColor(),
      });
    });
  }
}