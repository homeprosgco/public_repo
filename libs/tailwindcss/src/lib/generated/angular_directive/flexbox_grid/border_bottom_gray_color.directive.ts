import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomGrayColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomGrayColor]',
    standalone: true
})
export class BorderBottomGrayColorDirective extends BaseTailwindDirective {
  borderBottomGrayColor = input<BorderBottomGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_GRAY_COLOR: this.borderBottomGrayColor(),
      });
    });
  }
}