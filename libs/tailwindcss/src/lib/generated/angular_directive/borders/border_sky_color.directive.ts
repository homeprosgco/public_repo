import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderSkyColorType } from '../../tailwind_map_type/borders/border_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderSkyColor]',
    standalone: true
})
export class BorderSkyColorDirective extends BaseTailwindDirective {
  borderSkyColor = input<BorderSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_SKY_COLOR: this.borderSkyColor(),
      });
    });
  }
}