import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OpacityType } from '../../tailwind_map_type/effects/opacity_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[opacity]',
    standalone: true
})
export class OpacityDirective extends BaseTailwindDirective {
  opacity = input<OpacityType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OPACITY: this.opacity(),
      });
    });
  }
}