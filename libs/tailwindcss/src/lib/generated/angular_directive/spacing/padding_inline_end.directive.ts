import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { PaddingInlineEndType } from '../../tailwind_map_type/spacing/padding_inline_end_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[paddingInlineEnd]',
    standalone: true
})
export class PaddingInlineEndDirective extends BaseTailwindDirective {
  paddingInlineEnd = input<PaddingInlineEndType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        PADDING_INLINE_END: this.paddingInlineEnd(),
      });
    });
  }
}