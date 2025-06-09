import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomPurpleColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomPurpleColor]',
    standalone: true
})
export class BorderBottomPurpleColorDirective extends BaseTailwindDirective {
  borderBottomPurpleColor = input<BorderBottomPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_PURPLE_COLOR: this.borderBottomPurpleColor(),
      });
    });
  }
}