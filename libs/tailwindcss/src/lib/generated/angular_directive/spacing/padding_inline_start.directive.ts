import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { PaddingInlineStartType } from '../../tailwind_map_type/spacing/padding_inline_start_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[paddingInlineStart]',
    standalone: true
})
export class PaddingInlineStartDirective extends BaseTailwindDirective {
  paddingInlineStart = input<PaddingInlineStartType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        PADDING_INLINE_START: this.paddingInlineStart(),
      });
    });
  }
}