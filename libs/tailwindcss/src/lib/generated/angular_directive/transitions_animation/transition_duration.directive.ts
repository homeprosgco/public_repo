import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TransitionDurationType } from '../../tailwind_map_type/transitions_animation/transition_duration_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[transitionDuration]',
    standalone: true
})
export class TransitionDurationDirective extends BaseTailwindDirective {
  transitionDuration = input<TransitionDurationType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TRANSITION_DURATION: this.transitionDuration(),
      });
    });
  }
}