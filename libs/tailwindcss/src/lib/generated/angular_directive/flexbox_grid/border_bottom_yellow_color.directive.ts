import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomYellowColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomYellowColor]',
    standalone: true
})
export class BorderBottomYellowColorDirective extends BaseTailwindDirective {
  borderBottomYellowColor = input<BorderBottomYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_YELLOW_COLOR: this.borderBottomYellowColor(),
      });
    });
  }
}