import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomZincColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomZincColor]',
    standalone: true
})
export class BorderBottomZincColorDirective extends BaseTailwindDirective {
  borderBottomZincColor = input<BorderBottomZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_ZINC_COLOR: this.borderBottomZincColor(),
      });
    });
  }
}