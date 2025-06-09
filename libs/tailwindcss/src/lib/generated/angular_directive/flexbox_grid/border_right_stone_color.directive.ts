import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightStoneColorType } from '../../tailwind_map_type/flexbox_grid/border_right_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightStoneColor]',
    standalone: true
})
export class BorderRightStoneColorDirective extends BaseTailwindDirective {
  borderRightStoneColor = input<BorderRightStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_STONE_COLOR: this.borderRightStoneColor(),
      });
    });
  }
}