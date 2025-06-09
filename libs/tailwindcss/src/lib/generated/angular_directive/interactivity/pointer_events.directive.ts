import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { PointerEventsType } from '../../tailwind_map_type/interactivity/pointer_events_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[pointerEvents]',
    standalone: true
})
export class PointerEventsDirective extends BaseTailwindDirective {
  pointerEvents = input<PointerEventsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        POINTER_EVENTS: this.pointerEvents(),
      });
    });
  }
}