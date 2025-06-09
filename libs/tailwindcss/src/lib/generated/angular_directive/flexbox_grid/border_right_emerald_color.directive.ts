import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightEmeraldColorType } from '../../tailwind_map_type/flexbox_grid/border_right_emerald_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightEmeraldColor]',
    standalone: true
})
export class BorderRightEmeraldColorDirective extends BaseTailwindDirective {
  borderRightEmeraldColor = input<BorderRightEmeraldColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_EMERALD_COLOR: this.borderRightEmeraldColor(),
      });
    });
  }
}