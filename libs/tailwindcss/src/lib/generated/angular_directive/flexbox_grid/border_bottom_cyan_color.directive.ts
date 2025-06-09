import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomCyanColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_cyan_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomCyanColor]',
    standalone: true
})
export class BorderBottomCyanColorDirective extends BaseTailwindDirective {
  borderBottomCyanColor = input<BorderBottomCyanColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_CYAN_COLOR: this.borderBottomCyanColor(),
      });
    });
  }
}