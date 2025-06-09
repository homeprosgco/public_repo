import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollBehaviorType } from '../../tailwind_map_type/interactivity/scroll_behavior_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollBehavior]',
    standalone: true
})
export class ScrollBehaviorDirective extends BaseTailwindDirective {
  scrollBehavior = input<ScrollBehaviorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_BEHAVIOR: this.scrollBehavior(),
      });
    });
  }
}