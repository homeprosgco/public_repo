import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightOrangeColorType } from '../../tailwind_map_type/flexbox_grid/border_right_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightOrangeColor]',
    standalone: true
})
export class BorderRightOrangeColorDirective extends BaseTailwindDirective {
  borderRightOrangeColor = input<BorderRightOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_ORANGE_COLOR: this.borderRightOrangeColor(),
      });
    });
  }
}