import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartLimeColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartLimeColor]',
    standalone: true
})
export class BorderInlineStartLimeColorDirective extends BaseTailwindDirective {
  borderInlineStartLimeColor = input<BorderInlineStartLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_LIME_COLOR: this.borderInlineStartLimeColor(),
      });
    });
  }
}