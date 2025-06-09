import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FilterType } from '../../tailwind_map_type/filters/filter_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[filter]',
    standalone: true
})
export class FilterDirective extends BaseTailwindDirective {
  filter = input<FilterType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FILTER: this.filter(),
      });
    });
  }
}