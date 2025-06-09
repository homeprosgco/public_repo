import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundOriginType } from '../../tailwind_map_type/backgrounds/background_origin_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundOrigin]',
    standalone: true
})
export class BackgroundOriginDirective extends BaseTailwindDirective {
  backgroundOrigin = input<BackgroundOriginType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_ORIGIN: this.backgroundOrigin(),
      });
    });
  }
}