import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowSkyColorType } from '../../tailwind_map_type/typography/shadow_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowSkyColor]',
    standalone: true
})
export class ShadowSkyColorDirective extends BaseTailwindDirective {
  shadowSkyColor = input<ShadowSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_SKY_COLOR: this.shadowSkyColor(),
      });
    });
  }
}