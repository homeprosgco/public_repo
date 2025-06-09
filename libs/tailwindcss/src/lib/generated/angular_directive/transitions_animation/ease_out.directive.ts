import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { EaseOutType } from '../../tailwind_map_type/transitions_animation/ease_out_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[easeOut]',
    standalone: true
})
export class EaseOutDirective extends BaseTailwindDirective {
  easeOut = input<EaseOutType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        EASE_OUT: this.easeOut(),
      });
    });
  }
}