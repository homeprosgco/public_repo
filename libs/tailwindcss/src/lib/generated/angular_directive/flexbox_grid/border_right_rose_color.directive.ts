import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightRoseColorType } from '../../tailwind_map_type/flexbox_grid/border_right_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightRoseColor]',
    standalone: true
})
export class BorderRightRoseColorDirective extends BaseTailwindDirective {
  borderRightRoseColor = input<BorderRightRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_ROSE_COLOR: this.borderRightRoseColor(),
      });
    });
  }
}