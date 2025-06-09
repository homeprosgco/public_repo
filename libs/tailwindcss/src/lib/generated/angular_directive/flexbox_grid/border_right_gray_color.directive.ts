import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightGrayColorType } from '../../tailwind_map_type/flexbox_grid/border_right_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightGrayColor]',
    standalone: true
})
export class BorderRightGrayColorDirective extends BaseTailwindDirective {
  borderRightGrayColor = input<BorderRightGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_GRAY_COLOR: this.borderRightGrayColor(),
      });
    });
  }
}