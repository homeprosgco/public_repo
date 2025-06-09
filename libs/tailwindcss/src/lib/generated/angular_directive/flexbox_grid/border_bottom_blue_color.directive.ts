import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomBlueColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomBlueColor]',
    standalone: true
})
export class BorderBottomBlueColorDirective extends BaseTailwindDirective {
  borderBottomBlueColor = input<BorderBottomBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_BLUE_COLOR: this.borderBottomBlueColor(),
      });
    });
  }
}