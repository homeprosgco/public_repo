import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndColor]',
    standalone: true
})
export class BorderInlineEndColorDirective extends BaseTailwindDirective {
  borderInlineEndColor = input<BorderInlineEndColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_COLOR: this.borderInlineEndColor(),
      });
    });
  }
}