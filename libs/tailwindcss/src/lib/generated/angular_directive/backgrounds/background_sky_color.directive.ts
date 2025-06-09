import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundSkyColorType } from '../../tailwind_map_type/backgrounds/background_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundSkyColor]',
    standalone: true
})
export class BackgroundSkyColorDirective extends BaseTailwindDirective {
  backgroundSkyColor = input<BackgroundSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_SKY_COLOR: this.backgroundSkyColor(),
      });
    });
  }
}