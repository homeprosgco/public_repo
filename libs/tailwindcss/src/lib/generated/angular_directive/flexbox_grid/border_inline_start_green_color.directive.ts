import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartGreenColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartGreenColor]',
    standalone: true
})
export class BorderInlineStartGreenColorDirective extends BaseTailwindDirective {
  borderInlineStartGreenColor = input<BorderInlineStartGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_GREEN_COLOR: this.borderInlineStartGreenColor(),
      });
    });
  }
}