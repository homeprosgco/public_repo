import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BreakAfterType } from '../../tailwind_map_type/layout/break_after_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[breakAfter]',
    standalone: true
})
export class BreakAfterDirective extends BaseTailwindDirective {
  breakAfter = input<BreakAfterType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BREAK_AFTER: this.breakAfter(),
      });
    });
  }
}