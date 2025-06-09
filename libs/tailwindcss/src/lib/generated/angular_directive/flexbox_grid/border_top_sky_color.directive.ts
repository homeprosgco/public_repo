import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopSkyColorType } from '../../tailwind_map_type/flexbox_grid/border_top_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopSkyColor]',
    standalone: true
})
export class BorderTopSkyColorDirective extends BaseTailwindDirective {
  borderTopSkyColor = input<BorderTopSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_SKY_COLOR: this.borderTopSkyColor(),
      });
    });
  }
}