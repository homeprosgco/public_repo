import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ClearType } from '../../tailwind_map_type/layout/clear_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[clear]',
    standalone: true
})
export class ClearDirective extends BaseTailwindDirective {
  clear = input<ClearType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CLEAR: this.clear(),
      });
    });
  }
}