import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopRoseColorType } from '../../tailwind_map_type/flexbox_grid/border_top_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopRoseColor]',
    standalone: true
})
export class BorderTopRoseColorDirective extends BaseTailwindDirective {
  borderTopRoseColor = input<BorderTopRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_ROSE_COLOR: this.borderTopRoseColor(),
      });
    });
  }
}