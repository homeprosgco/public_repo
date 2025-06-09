import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MarginInlineStartType } from '../../tailwind_map_type/spacing/margin_inline_start_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[marginInlineStart]',
    standalone: true
})
export class MarginInlineStartDirective extends BaseTailwindDirective {
  marginInlineStart = input<MarginInlineStartType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MARGIN_INLINE_START: this.marginInlineStart(),
      });
    });
  }
}