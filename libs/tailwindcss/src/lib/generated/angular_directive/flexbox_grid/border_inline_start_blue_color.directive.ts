import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartBlueColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartBlueColor]',
    standalone: true
})
export class BorderInlineStartBlueColorDirective extends BaseTailwindDirective {
  borderInlineStartBlueColor = input<BorderInlineStartBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_BLUE_COLOR: this.borderInlineStartBlueColor(),
      });
    });
  }
}