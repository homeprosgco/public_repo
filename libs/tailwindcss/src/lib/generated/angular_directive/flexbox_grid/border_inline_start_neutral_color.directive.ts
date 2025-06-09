import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartNeutralColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartNeutralColor]',
    standalone: true
})
export class BorderInlineStartNeutralColorDirective extends BaseTailwindDirective {
  borderInlineStartNeutralColor = input<BorderInlineStartNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_NEUTRAL_COLOR: this.borderInlineStartNeutralColor(),
      });
    });
  }
}