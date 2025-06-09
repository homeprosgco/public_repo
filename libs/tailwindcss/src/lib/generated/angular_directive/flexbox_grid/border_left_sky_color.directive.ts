import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftSkyColorType } from '../../tailwind_map_type/flexbox_grid/border_left_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftSkyColor]',
    standalone: true
})
export class BorderLeftSkyColorDirective extends BaseTailwindDirective {
  borderLeftSkyColor = input<BorderLeftSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_SKY_COLOR: this.borderLeftSkyColor(),
      });
    });
  }
}