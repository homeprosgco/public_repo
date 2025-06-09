import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OverscrollBehaviorXType } from '../../tailwind_map_type/layout/overscroll_behavior_x_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[overscrollBehaviorX]',
    standalone: true
})
export class OverscrollBehaviorXDirective extends BaseTailwindDirective {
  overscrollBehaviorX = input<OverscrollBehaviorXType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OVERSCROLL_BEHAVIOR_X: this.overscrollBehaviorX(),
      });
    });
  }
}