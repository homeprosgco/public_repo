import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BreakInsideType } from '../../tailwind_map_type/layout/break_inside_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[breakInside]',
    standalone: true
})
export class BreakInsideDirective extends BaseTailwindDirective {
  breakInside = input<BreakInsideType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BREAK_INSIDE: this.breakInside(),
      });
    });
  }
}