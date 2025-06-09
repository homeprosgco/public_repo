import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomOrangeColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomOrangeColor]',
    standalone: true
})
export class BorderBottomOrangeColorDirective extends BaseTailwindDirective {
  borderBottomOrangeColor = input<BorderBottomOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_ORANGE_COLOR: this.borderBottomOrangeColor(),
      });
    });
  }
}