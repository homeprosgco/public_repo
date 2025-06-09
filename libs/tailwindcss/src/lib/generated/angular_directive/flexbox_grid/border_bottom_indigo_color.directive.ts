import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomIndigoColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomIndigoColor]',
    standalone: true
})
export class BorderBottomIndigoColorDirective extends BaseTailwindDirective {
  borderBottomIndigoColor = input<BorderBottomIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_INDIGO_COLOR: this.borderBottomIndigoColor(),
      });
    });
  }
}