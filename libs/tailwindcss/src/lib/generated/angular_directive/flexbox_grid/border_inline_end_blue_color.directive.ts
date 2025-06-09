import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndBlueColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndBlueColor]',
    standalone: true
})
export class BorderInlineEndBlueColorDirective extends BaseTailwindDirective {
  borderInlineEndBlueColor = input<BorderInlineEndBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_BLUE_COLOR: this.borderInlineEndBlueColor(),
      });
    });
  }
}