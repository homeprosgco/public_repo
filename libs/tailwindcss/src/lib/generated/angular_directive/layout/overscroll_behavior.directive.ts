import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OverscrollBehaviorType } from '../../tailwind_map_type/layout/overscroll_behavior_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[overscrollBehavior]',
    standalone: true
})
export class OverscrollBehaviorDirective extends BaseTailwindDirective {
  overscrollBehavior = input<OverscrollBehaviorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OVERSCROLL_BEHAVIOR: this.overscrollBehavior(),
      });
    });
  }
}