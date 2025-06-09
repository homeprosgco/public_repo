import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { InsetInlineStartType } from '../../tailwind_map_type/layout/inset_inline_start_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[insetInlineStart]',
    standalone: true
})
export class InsetInlineStartDirective extends BaseTailwindDirective {
  insetInlineStart = input<InsetInlineStartType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        INSET_INLINE_START: this.insetInlineStart(),
      });
    });
  }
}