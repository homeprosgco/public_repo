import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightIndigoColorType } from '../../tailwind_map_type/flexbox_grid/border_right_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightIndigoColor]',
    standalone: true
})
export class BorderRightIndigoColorDirective extends BaseTailwindDirective {
  borderRightIndigoColor = input<BorderRightIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_INDIGO_COLOR: this.borderRightIndigoColor(),
      });
    });
  }
}