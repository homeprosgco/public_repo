import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndRoseColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndRoseColor]',
    standalone: true
})
export class BorderInlineEndRoseColorDirective extends BaseTailwindDirective {
  borderInlineEndRoseColor = input<BorderInlineEndRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_ROSE_COLOR: this.borderInlineEndRoseColor(),
      });
    });
  }
}