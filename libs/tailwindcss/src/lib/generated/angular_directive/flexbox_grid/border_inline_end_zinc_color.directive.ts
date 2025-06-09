import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndZincColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndZincColor]',
    standalone: true
})
export class BorderInlineEndZincColorDirective extends BaseTailwindDirective {
  borderInlineEndZincColor = input<BorderInlineEndZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_ZINC_COLOR: this.borderInlineEndZincColor(),
      });
    });
  }
}