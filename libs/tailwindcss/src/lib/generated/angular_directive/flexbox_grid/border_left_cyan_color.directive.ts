import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftCyanColorType } from '../../tailwind_map_type/flexbox_grid/border_left_cyan_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftCyanColor]',
    standalone: true
})
export class BorderLeftCyanColorDirective extends BaseTailwindDirective {
  borderLeftCyanColor = input<BorderLeftCyanColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_CYAN_COLOR: this.borderLeftCyanColor(),
      });
    });
  }
}