import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartFuchsiaColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartFuchsiaColor]',
    standalone: true
})
export class BorderInlineStartFuchsiaColorDirective extends BaseTailwindDirective {
  borderInlineStartFuchsiaColor = input<BorderInlineStartFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_FUCHSIA_COLOR: this.borderInlineStartFuchsiaColor(),
      });
    });
  }
}