import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopVioletColorType } from '../../tailwind_map_type/flexbox_grid/border_top_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopVioletColor]',
    standalone: true
})
export class BorderTopVioletColorDirective extends BaseTailwindDirective {
  borderTopVioletColor = input<BorderTopVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_VIOLET_COLOR: this.borderTopVioletColor(),
      });
    });
  }
}