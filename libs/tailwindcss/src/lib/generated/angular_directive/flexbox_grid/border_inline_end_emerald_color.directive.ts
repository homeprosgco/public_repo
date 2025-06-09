import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndEmeraldColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_emerald_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndEmeraldColor]',
    standalone: true
})
export class BorderInlineEndEmeraldColorDirective extends BaseTailwindDirective {
  borderInlineEndEmeraldColor = input<BorderInlineEndEmeraldColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_EMERALD_COLOR: this.borderInlineEndEmeraldColor(),
      });
    });
  }
}