import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TransitionTimingFunctionType } from '../../tailwind_map_type/transitions_animation/transition_timing_function_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[transitionTimingFunction]',
    standalone: true
})
export class TransitionTimingFunctionDirective extends BaseTailwindDirective {
  transitionTimingFunction = input<TransitionTimingFunctionType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TRANSITION_TIMING_FUNCTION: this.transitionTimingFunction(),
      });
    });
  }
}