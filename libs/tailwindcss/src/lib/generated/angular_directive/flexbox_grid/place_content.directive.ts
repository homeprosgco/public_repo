import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { PlaceContentType } from '../../tailwind_map_type/flexbox_grid/place_content_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[placeContent]',
    standalone: true
})
export class PlaceContentDirective extends BaseTailwindDirective {
  placeContent = input<PlaceContentType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        PLACE_CONTENT: this.placeContent(),
      });
    });
  }
}