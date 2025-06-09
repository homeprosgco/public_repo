import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomNeutralColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomNeutralColor]',
    standalone: true
})
export class BorderBottomNeutralColorDirective extends BaseTailwindDirective {
  borderBottomNeutralColor = input<BorderBottomNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_NEUTRAL_COLOR: this.borderBottomNeutralColor(),
      });
    });
  }
}