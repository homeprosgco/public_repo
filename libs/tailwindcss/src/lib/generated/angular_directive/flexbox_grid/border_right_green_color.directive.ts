import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightGreenColorType } from '../../tailwind_map_type/flexbox_grid/border_right_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightGreenColor]',
    standalone: true
})
export class BorderRightGreenColorDirective extends BaseTailwindDirective {
  borderRightGreenColor = input<BorderRightGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_GREEN_COLOR: this.borderRightGreenColor(),
      });
    });
  }
}