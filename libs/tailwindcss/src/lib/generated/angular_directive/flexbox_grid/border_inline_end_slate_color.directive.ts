import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndSlateColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndSlateColor]',
    standalone: true
})
export class BorderInlineEndSlateColorDirective extends BaseTailwindDirective {
  borderInlineEndSlateColor = input<BorderInlineEndSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_SLATE_COLOR: this.borderInlineEndSlateColor(),
      });
    });
  }
}