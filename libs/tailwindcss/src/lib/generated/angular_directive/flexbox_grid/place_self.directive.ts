import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { PlaceSelfType } from '../../tailwind_map_type/flexbox_grid/place_self_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[placeSelf]',
    standalone: true
})
export class PlaceSelfDirective extends BaseTailwindDirective {
  placeSelf = input<PlaceSelfType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        PLACE_SELF: this.placeSelf(),
      });
    });
  }
}