import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartColor]',
    standalone: true
})
export class BorderInlineStartColorDirective extends BaseTailwindDirective {
  borderInlineStartColor = input<BorderInlineStartColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_COLOR: this.borderInlineStartColor(),
      });
    });
  }
}