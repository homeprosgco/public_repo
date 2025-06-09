import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentSkyColorType } from '../../tailwind_map_type/interactivity/accent_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentSkyColor]',
    standalone: true
})
export class AccentSkyColorDirective extends BaseTailwindDirective {
  accentSkyColor = input<AccentSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_SKY_COLOR: this.accentSkyColor(),
      });
    });
  }
}