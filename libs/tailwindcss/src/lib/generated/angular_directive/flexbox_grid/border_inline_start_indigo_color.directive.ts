import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartIndigoColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartIndigoColor]',
    standalone: true
})
export class BorderInlineStartIndigoColorDirective extends BaseTailwindDirective {
  borderInlineStartIndigoColor = input<BorderInlineStartIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_INDIGO_COLOR: this.borderInlineStartIndigoColor(),
      });
    });
  }
}