import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndIndigoColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndIndigoColor]',
    standalone: true
})
export class BorderInlineEndIndigoColorDirective extends BaseTailwindDirective {
  borderInlineEndIndigoColor = input<BorderInlineEndIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_INDIGO_COLOR: this.borderInlineEndIndigoColor(),
      });
    });
  }
}