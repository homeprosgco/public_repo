import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollSnapStrictnessType } from '../../tailwind_map_type/layout/scroll_snap_strictness_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollSnapStrictness]',
    standalone: true
})
export class ScrollSnapStrictnessDirective extends BaseTailwindDirective {
  scrollSnapStrictness = input<ScrollSnapStrictnessType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_SNAP_STRICTNESS: this.scrollSnapStrictness(),
      });
    });
  }
}