import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ZIndexType } from '../../tailwind_map_type/layout/z_index_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[zIndex]',
    standalone: true
})
export class ZIndexDirective extends BaseTailwindDirective {
  zIndex = input<ZIndexType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        Z_INDEX: this.zIndex(),
      });
    });
  }
}