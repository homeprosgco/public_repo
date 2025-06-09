import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightCyanColorType } from '../../tailwind_map_type/flexbox_grid/border_right_cyan_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightCyanColor]',
    standalone: true
})
export class BorderRightCyanColorDirective extends BaseTailwindDirective {
  borderRightCyanColor = input<BorderRightCyanColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_CYAN_COLOR: this.borderRightCyanColor(),
      });
    });
  }
}