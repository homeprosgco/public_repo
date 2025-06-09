import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndFuchsiaColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndFuchsiaColor]',
    standalone: true
})
export class BorderInlineEndFuchsiaColorDirective extends BaseTailwindDirective {
  borderInlineEndFuchsiaColor = input<BorderInlineEndFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_FUCHSIA_COLOR: this.borderInlineEndFuchsiaColor(),
      });
    });
  }
}