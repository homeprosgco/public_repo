import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollSnapAlignType } from '../../tailwind_map_type/interactivity/scroll_snap_align_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollSnapAlign]',
    standalone: true
})
export class ScrollSnapAlignDirective extends BaseTailwindDirective {
  scrollSnapAlign = input<ScrollSnapAlignType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_SNAP_ALIGN: this.scrollSnapAlign(),
      });
    });
  }
}