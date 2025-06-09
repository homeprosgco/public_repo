import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { EaseInType } from '../../tailwind_map_type/transitions_animation/ease_in_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[easeIn]',
    standalone: true
})
export class EaseInDirective extends BaseTailwindDirective {
  easeIn = input<EaseInType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        EASE_IN: this.easeIn(),
      });
    });
  }
}