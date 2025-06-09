import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRoseColorType } from '../../tailwind_map_type/borders/border_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRoseColor]',
    standalone: true
})
export class BorderRoseColorDirective extends BaseTailwindDirective {
  borderRoseColor = input<BorderRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_ROSE_COLOR: this.borderRoseColor(),
      });
    });
  }
}