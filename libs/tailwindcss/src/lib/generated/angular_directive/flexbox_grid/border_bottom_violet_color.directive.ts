import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomVioletColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomVioletColor]',
    standalone: true
})
export class BorderBottomVioletColorDirective extends BaseTailwindDirective {
  borderBottomVioletColor = input<BorderBottomVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_VIOLET_COLOR: this.borderBottomVioletColor(),
      });
    });
  }
}