import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackdropHueType } from '../../tailwind_map_type/filters/backdrop_hue_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backdropHue]',
    standalone: true
})
export class BackdropHueDirective extends BaseTailwindDirective {
  backdropHue = input<BackdropHueType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKDROP_HUE: this.backdropHue(),
      });
    });
  }
}