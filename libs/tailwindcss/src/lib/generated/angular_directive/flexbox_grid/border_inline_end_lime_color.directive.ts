import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndLimeColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndLimeColor]',
    standalone: true
})
export class BorderInlineEndLimeColorDirective extends BaseTailwindDirective {
  borderInlineEndLimeColor = input<BorderInlineEndLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_LIME_COLOR: this.borderInlineEndLimeColor(),
      });
    });
  }
}