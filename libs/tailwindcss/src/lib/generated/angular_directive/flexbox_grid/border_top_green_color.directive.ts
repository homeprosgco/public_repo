import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopGreenColorType } from '../../tailwind_map_type/flexbox_grid/border_top_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopGreenColor]',
    standalone: true
})
export class BorderTopGreenColorDirective extends BaseTailwindDirective {
  borderTopGreenColor = input<BorderTopGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_GREEN_COLOR: this.borderTopGreenColor(),
      });
    });
  }
}