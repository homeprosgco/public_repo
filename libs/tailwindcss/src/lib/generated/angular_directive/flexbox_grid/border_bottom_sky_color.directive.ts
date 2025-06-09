import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomSkyColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomSkyColor]',
    standalone: true
})
export class BorderBottomSkyColorDirective extends BaseTailwindDirective {
  borderBottomSkyColor = input<BorderBottomSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_SKY_COLOR: this.borderBottomSkyColor(),
      });
    });
  }
}