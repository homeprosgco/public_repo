import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopOrangeColorType } from '../../tailwind_map_type/flexbox_grid/border_top_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopOrangeColor]',
    standalone: true
})
export class BorderTopOrangeColorDirective extends BaseTailwindDirective {
  borderTopOrangeColor = input<BorderTopOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_ORANGE_COLOR: this.borderTopOrangeColor(),
      });
    });
  }
}