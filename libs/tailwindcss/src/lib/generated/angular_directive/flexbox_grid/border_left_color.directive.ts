import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftColorType } from '../../tailwind_map_type/flexbox_grid/border_left_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftColor]',
    standalone: true
})
export class BorderLeftColorDirective extends BaseTailwindDirective {
  borderLeftColor = input<BorderLeftColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_COLOR: this.borderLeftColor(),
      });
    });
  }
}