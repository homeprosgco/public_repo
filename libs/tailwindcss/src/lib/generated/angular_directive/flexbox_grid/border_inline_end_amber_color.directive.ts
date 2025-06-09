import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndAmberColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_amber_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndAmberColor]',
    standalone: true
})
export class BorderInlineEndAmberColorDirective extends BaseTailwindDirective {
  borderInlineEndAmberColor = input<BorderInlineEndAmberColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_AMBER_COLOR: this.borderInlineEndAmberColor(),
      });
    });
  }
}