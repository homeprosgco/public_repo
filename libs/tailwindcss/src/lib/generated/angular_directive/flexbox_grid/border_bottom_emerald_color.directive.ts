import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomEmeraldColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_emerald_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomEmeraldColor]',
    standalone: true
})
export class BorderBottomEmeraldColorDirective extends BaseTailwindDirective {
  borderBottomEmeraldColor = input<BorderBottomEmeraldColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_EMERALD_COLOR: this.borderBottomEmeraldColor(),
      });
    });
  }
}