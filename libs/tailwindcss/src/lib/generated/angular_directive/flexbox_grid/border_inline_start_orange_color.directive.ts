import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartOrangeColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartOrangeColor]',
    standalone: true
})
export class BorderInlineStartOrangeColorDirective extends BaseTailwindDirective {
  borderInlineStartOrangeColor = input<BorderInlineStartOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_ORANGE_COLOR: this.borderInlineStartOrangeColor(),
      });
    });
  }
}