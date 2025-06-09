import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopBlueColorType } from '../../tailwind_map_type/flexbox_grid/border_top_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopBlueColor]',
    standalone: true
})
export class BorderTopBlueColorDirective extends BaseTailwindDirective {
  borderTopBlueColor = input<BorderTopBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_BLUE_COLOR: this.borderTopBlueColor(),
      });
    });
  }
}