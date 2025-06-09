import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BreakBeforeType } from '../../tailwind_map_type/layout/break_before_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[breakBefore]',
    standalone: true
})
export class BreakBeforeDirective extends BaseTailwindDirective {
  breakBefore = input<BreakBeforeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BREAK_BEFORE: this.breakBefore(),
      });
    });
  }
}