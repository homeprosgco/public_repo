import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightSkyColorType } from '../../tailwind_map_type/flexbox_grid/border_right_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightSkyColor]',
    standalone: true
})
export class BorderRightSkyColorDirective extends BaseTailwindDirective {
  borderRightSkyColor = input<BorderRightSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_SKY_COLOR: this.borderRightSkyColor(),
      });
    });
  }
}