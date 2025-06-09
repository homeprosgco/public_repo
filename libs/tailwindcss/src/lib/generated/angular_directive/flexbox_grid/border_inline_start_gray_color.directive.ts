import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartGrayColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartGrayColor]',
    standalone: true
})
export class BorderInlineStartGrayColorDirective extends BaseTailwindDirective {
  borderInlineStartGrayColor = input<BorderInlineStartGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_GRAY_COLOR: this.borderInlineStartGrayColor(),
      });
    });
  }
}