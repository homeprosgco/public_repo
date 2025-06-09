import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AlignItemsType } from '../../tailwind_map_type/flexbox_grid/align_items_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[alignItems]',
    standalone: true
})
export class AlignItemsDirective extends BaseTailwindDirective {
  alignItems = input<AlignItemsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ALIGN_ITEMS: this.alignItems(),
      });
    });
  }
}