import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartTealColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartTealColor]',
    standalone: true
})
export class BorderInlineStartTealColorDirective extends BaseTailwindDirective {
  borderInlineStartTealColor = input<BorderInlineStartTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_TEAL_COLOR: this.borderInlineStartTealColor(),
      });
    });
  }
}