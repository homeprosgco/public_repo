import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackdropFilterType } from '../../tailwind_map_type/filters/backdrop_filter_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backdropFilter]',
    standalone: true
})
export class BackdropFilterDirective extends BaseTailwindDirective {
  backdropFilter = input<BackdropFilterType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKDROP_FILTER: this.backdropFilter(),
      });
    });
  }
}