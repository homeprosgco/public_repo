import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BoxSizingType } from '../../tailwind_map_type/layout/box_sizing_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[boxSizing]',
    standalone: true
})
export class BoxSizingDirective extends BaseTailwindDirective {
  boxSizing = input<BoxSizingType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BOX_SIZING: this.boxSizing(),
      });
    });
  }
}