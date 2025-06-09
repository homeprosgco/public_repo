import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightBlueColorType } from '../../tailwind_map_type/flexbox_grid/border_right_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightBlueColor]',
    standalone: true
})
export class BorderRightBlueColorDirective extends BaseTailwindDirective {
  borderRightBlueColor = input<BorderRightBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_BLUE_COLOR: this.borderRightBlueColor(),
      });
    });
  }
}