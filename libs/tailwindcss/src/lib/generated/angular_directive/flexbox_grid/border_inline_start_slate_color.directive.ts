import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartSlateColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartSlateColor]',
    standalone: true
})
export class BorderInlineStartSlateColorDirective extends BaseTailwindDirective {
  borderInlineStartSlateColor = input<BorderInlineStartSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_SLATE_COLOR: this.borderInlineStartSlateColor(),
      });
    });
  }
}