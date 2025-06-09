import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartEmeraldColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_emerald_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartEmeraldColor]',
    standalone: true
})
export class BorderInlineStartEmeraldColorDirective extends BaseTailwindDirective {
  borderInlineStartEmeraldColor = input<BorderInlineStartEmeraldColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_EMERALD_COLOR: this.borderInlineStartEmeraldColor(),
      });
    });
  }
}