import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftRoseColorType } from '../../tailwind_map_type/flexbox_grid/border_left_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftRoseColor]',
    standalone: true
})
export class BorderLeftRoseColorDirective extends BaseTailwindDirective {
  borderLeftRoseColor = input<BorderLeftRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_ROSE_COLOR: this.borderLeftRoseColor(),
      });
    });
  }
}