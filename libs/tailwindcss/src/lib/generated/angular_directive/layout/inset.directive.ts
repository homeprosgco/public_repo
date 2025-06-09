import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { InsetType } from '../../tailwind_map_type/layout/inset_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[inset]',
    standalone: true
})
export class InsetDirective extends BaseTailwindDirective {
  inset = input<InsetType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        INSET: this.inset(),
      });
    });
  }
}