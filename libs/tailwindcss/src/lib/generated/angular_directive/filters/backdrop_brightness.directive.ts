import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackdropBrightnessType } from '../../tailwind_map_type/filters/backdrop_brightness_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backdropBrightness]',
    standalone: true
})
export class BackdropBrightnessDirective extends BaseTailwindDirective {
  backdropBrightness = input<BackdropBrightnessType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKDROP_BRIGHTNESS: this.backdropBrightness(),
      });
    });
  }
}