import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightZincColorType } from '../../tailwind_map_type/flexbox_grid/border_right_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightZincColor]',
    standalone: true
})
export class BorderRightZincColorDirective extends BaseTailwindDirective {
  borderRightZincColor = input<BorderRightZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_ZINC_COLOR: this.borderRightZincColor(),
      });
    });
  }
}