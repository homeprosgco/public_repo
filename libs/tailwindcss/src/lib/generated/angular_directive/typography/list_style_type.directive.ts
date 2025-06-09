import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ListStyleTypeType } from '../../tailwind_map_type/typography/list_style_type_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[listStyleType]',
    standalone: true
})
export class ListStyleTypeDirective extends BaseTailwindDirective {
  listStyleType = input<ListStyleTypeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        LIST_STYLE_TYPE: this.listStyleType(),
      });
    });
  }
}