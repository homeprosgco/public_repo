import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartVioletColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartVioletColor]',
    standalone: true
})
export class BorderInlineStartVioletColorDirective extends BaseTailwindDirective {
  borderInlineStartVioletColor = input<BorderInlineStartVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_VIOLET_COLOR: this.borderInlineStartVioletColor(),
      });
    });
  }
}