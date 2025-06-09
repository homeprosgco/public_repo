import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopCyanColorType } from '../../tailwind_map_type/flexbox_grid/border_top_cyan_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopCyanColor]',
    standalone: true
})
export class BorderTopCyanColorDirective extends BaseTailwindDirective {
  borderTopCyanColor = input<BorderTopCyanColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_CYAN_COLOR: this.borderTopCyanColor(),
      });
    });
  }
}