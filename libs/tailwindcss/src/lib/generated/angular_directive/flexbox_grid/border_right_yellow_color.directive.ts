import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightYellowColorType } from '../../tailwind_map_type/flexbox_grid/border_right_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightYellowColor]',
    standalone: true
})
export class BorderRightYellowColorDirective extends BaseTailwindDirective {
  borderRightYellowColor = input<BorderRightYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_YELLOW_COLOR: this.borderRightYellowColor(),
      });
    });
  }
}