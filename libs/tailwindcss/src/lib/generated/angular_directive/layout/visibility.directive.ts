import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { VisibilityType } from '../../tailwind_map_type/layout/visibility_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[visibility]',
    standalone: true
})
export class VisibilityDirective extends BaseTailwindDirective {
  visibility = input<VisibilityType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        VISIBILITY: this.visibility(),
      });
    });
  }
}