import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartPurpleColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartPurpleColor]',
    standalone: true
})
export class BorderInlineStartPurpleColorDirective extends BaseTailwindDirective {
  borderInlineStartPurpleColor = input<BorderInlineStartPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_PURPLE_COLOR: this.borderInlineStartPurpleColor(),
      });
    });
  }
}