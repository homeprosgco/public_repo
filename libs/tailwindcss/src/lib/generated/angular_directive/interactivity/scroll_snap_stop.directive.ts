import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollSnapStopType } from '../../tailwind_map_type/interactivity/scroll_snap_stop_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollSnapStop]',
    standalone: true
})
export class ScrollSnapStopDirective extends BaseTailwindDirective {
  scrollSnapStop = input<ScrollSnapStopType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_SNAP_STOP: this.scrollSnapStop(),
      });
    });
  }
}