import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightLimeColorType } from '../../tailwind_map_type/flexbox_grid/border_right_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightLimeColor]',
    standalone: true
})
export class BorderRightLimeColorDirective extends BaseTailwindDirective {
  borderRightLimeColor = input<BorderRightLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_LIME_COLOR: this.borderRightLimeColor(),
      });
    });
  }
}