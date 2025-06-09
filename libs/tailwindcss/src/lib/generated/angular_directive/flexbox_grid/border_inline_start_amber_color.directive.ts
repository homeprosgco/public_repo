import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartAmberColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_amber_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartAmberColor]',
    standalone: true
})
export class BorderInlineStartAmberColorDirective extends BaseTailwindDirective {
  borderInlineStartAmberColor = input<BorderInlineStartAmberColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_AMBER_COLOR: this.borderInlineStartAmberColor(),
      });
    });
  }
}