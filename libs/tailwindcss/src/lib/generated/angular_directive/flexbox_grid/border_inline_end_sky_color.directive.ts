import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndSkyColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndSkyColor]',
    standalone: true
})
export class BorderInlineEndSkyColorDirective extends BaseTailwindDirective {
  borderInlineEndSkyColor = input<BorderInlineEndSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_SKY_COLOR: this.borderInlineEndSkyColor(),
      });
    });
  }
}