import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightColorType } from '../../tailwind_map_type/flexbox_grid/border_right_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightColor]',
    standalone: true
})
export class BorderRightColorDirective extends BaseTailwindDirective {
  borderRightColor = input<BorderRightColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_COLOR: this.borderRightColor(),
      });
    });
  }
}