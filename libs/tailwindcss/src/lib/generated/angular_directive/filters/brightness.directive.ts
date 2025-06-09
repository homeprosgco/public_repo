import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BrightnessType } from '../../tailwind_map_type/filters/brightness_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[brightness]',
    standalone: true
})
export class BrightnessDirective extends BaseTailwindDirective {
  brightness = input<BrightnessType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BRIGHTNESS: this.brightness(),
      });
    });
  }
}