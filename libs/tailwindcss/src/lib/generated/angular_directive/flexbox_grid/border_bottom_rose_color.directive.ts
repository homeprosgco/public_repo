import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomRoseColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomRoseColor]',
    standalone: true
})
export class BorderBottomRoseColorDirective extends BaseTailwindDirective {
  borderBottomRoseColor = input<BorderBottomRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_ROSE_COLOR: this.borderBottomRoseColor(),
      });
    });
  }
}