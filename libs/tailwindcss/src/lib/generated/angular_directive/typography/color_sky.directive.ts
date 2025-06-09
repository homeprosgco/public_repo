import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorSkyType } from '../../tailwind_map_type/typography/color_sky_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorSky]',
    standalone: true
})
export class ColorSkyDirective extends BaseTailwindDirective {
  colorSky = input<ColorSkyType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_SKY: this.colorSky(),
      });
    });
  }
}