import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { JustifyItemsType } from '../../tailwind_map_type/flexbox_grid/justify_items_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[justifyItems]',
    standalone: true
})
export class JustifyItemsDirective extends BaseTailwindDirective {
  justifyItems = input<JustifyItemsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        JUSTIFY_ITEMS: this.justifyItems(),
      });
    });
  }
}