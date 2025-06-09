import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightPurpleColorType } from '../../tailwind_map_type/flexbox_grid/border_right_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightPurpleColor]',
    standalone: true
})
export class BorderRightPurpleColorDirective extends BaseTailwindDirective {
  borderRightPurpleColor = input<BorderRightPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_PURPLE_COLOR: this.borderRightPurpleColor(),
      });
    });
  }
}