import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartRoseColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartRoseColor]',
    standalone: true
})
export class BorderInlineStartRoseColorDirective extends BaseTailwindDirective {
  borderInlineStartRoseColor = input<BorderInlineStartRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_ROSE_COLOR: this.borderInlineStartRoseColor(),
      });
    });
  }
}