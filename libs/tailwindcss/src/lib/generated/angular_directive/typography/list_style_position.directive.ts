import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ListStylePositionType } from '../../tailwind_map_type/typography/list_style_position_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[listStylePosition]',
    standalone: true
})
export class ListStylePositionDirective extends BaseTailwindDirective {
  listStylePosition = input<ListStylePositionType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        LIST_STYLE_POSITION: this.listStylePosition(),
      });
    });
  }
}