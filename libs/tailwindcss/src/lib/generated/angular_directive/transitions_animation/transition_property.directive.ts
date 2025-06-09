import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TransitionPropertyType } from '../../tailwind_map_type/transitions_animation/transition_property_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[transitionProperty]',
    standalone: true
})
export class TransitionPropertyDirective extends BaseTailwindDirective {
  transitionProperty = input<TransitionPropertyType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TRANSITION_PROPERTY: this.transitionProperty(),
      });
    });
  }
}