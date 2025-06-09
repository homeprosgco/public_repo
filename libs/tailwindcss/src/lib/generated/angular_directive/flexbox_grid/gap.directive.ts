import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GapType } from '../../tailwind_map_type/flexbox_grid/gap_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gap]',
    standalone: true
})
export class GapDirective extends BaseTailwindDirective {
  gap = input<GapType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GAP: this.gap(),
      });
    });
  }
}