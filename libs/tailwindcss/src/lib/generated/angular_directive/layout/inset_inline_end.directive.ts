import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { InsetInlineEndType } from '../../tailwind_map_type/layout/inset_inline_end_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[insetInlineEnd]',
    standalone: true
})
export class InsetInlineEndDirective extends BaseTailwindDirective {
  insetInlineEnd = input<InsetInlineEndType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        INSET_INLINE_END: this.insetInlineEnd(),
      });
    });
  }
}