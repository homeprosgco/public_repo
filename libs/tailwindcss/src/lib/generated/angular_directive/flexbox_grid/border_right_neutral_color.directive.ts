import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightNeutralColorType } from '../../tailwind_map_type/flexbox_grid/border_right_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightNeutralColor]',
    standalone: true
})
export class BorderRightNeutralColorDirective extends BaseTailwindDirective {
  borderRightNeutralColor = input<BorderRightNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_NEUTRAL_COLOR: this.borderRightNeutralColor(),
      });
    });
  }
}