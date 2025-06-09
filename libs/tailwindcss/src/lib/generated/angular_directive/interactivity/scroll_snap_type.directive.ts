import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollSnapTypeType } from '../../tailwind_map_type/interactivity/scroll_snap_type_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollSnapType]',
    standalone: true
})
export class ScrollSnapTypeDirective extends BaseTailwindDirective {
  scrollSnapType = input<ScrollSnapTypeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_SNAP_TYPE: this.scrollSnapType(),
      });
    });
  }
}