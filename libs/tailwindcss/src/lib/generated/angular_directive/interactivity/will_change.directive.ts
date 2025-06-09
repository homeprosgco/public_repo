import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { WillChangeType } from '../../tailwind_map_type/interactivity/will_change_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[willChange]',
    standalone: true
})
export class WillChangeDirective extends BaseTailwindDirective {
  willChange = input<WillChangeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        WILL_CHANGE: this.willChange(),
      });
    });
  }
}