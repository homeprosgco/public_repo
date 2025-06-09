import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartZincColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartZincColor]',
    standalone: true
})
export class BorderInlineStartZincColorDirective extends BaseTailwindDirective {
  borderInlineStartZincColor = input<BorderInlineStartZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_ZINC_COLOR: this.borderInlineStartZincColor(),
      });
    });
  }
}