import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OverscrollBehaviorYType } from '../../tailwind_map_type/layout/overscroll_behavior_y_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[overscrollBehaviorY]',
    standalone: true
})
export class OverscrollBehaviorYDirective extends BaseTailwindDirective {
  overscrollBehaviorY = input<OverscrollBehaviorYType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OVERSCROLL_BEHAVIOR_Y: this.overscrollBehaviorY(),
      });
    });
  }
}