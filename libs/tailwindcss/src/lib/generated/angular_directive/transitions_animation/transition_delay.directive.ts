import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TransitionDelayType } from '../../tailwind_map_type/transitions_animation/transition_delay_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[transitionDelay]',
    standalone: true
})
export class TransitionDelayDirective extends BaseTailwindDirective {
  transitionDelay = input<TransitionDelayType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TRANSITION_DELAY: this.transitionDelay(),
      });
    });
  }
}