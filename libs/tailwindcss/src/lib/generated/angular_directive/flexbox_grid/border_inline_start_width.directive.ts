import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartWidthType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_width_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartWidth]',
    standalone: true
})
export class BorderInlineStartWidthDirective extends BaseTailwindDirective {
  borderInlineStartWidth = input<BorderInlineStartWidthType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_WIDTH: this.borderInlineStartWidth(),
      });
    });
  }
}