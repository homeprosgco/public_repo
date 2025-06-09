import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopTealColorType } from '../../tailwind_map_type/flexbox_grid/border_top_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopTealColor]',
    standalone: true
})
export class BorderTopTealColorDirective extends BaseTailwindDirective {
  borderTopTealColor = input<BorderTopTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_TEAL_COLOR: this.borderTopTealColor(),
      });
    });
  }
}