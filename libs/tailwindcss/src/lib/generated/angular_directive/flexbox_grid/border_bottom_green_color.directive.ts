import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomGreenColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomGreenColor]',
    standalone: true
})
export class BorderBottomGreenColorDirective extends BaseTailwindDirective {
  borderBottomGreenColor = input<BorderBottomGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_GREEN_COLOR: this.borderBottomGreenColor(),
      });
    });
  }
}