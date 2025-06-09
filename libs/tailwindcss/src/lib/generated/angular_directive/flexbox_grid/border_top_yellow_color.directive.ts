import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopYellowColorType } from '../../tailwind_map_type/flexbox_grid/border_top_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopYellowColor]',
    standalone: true
})
export class BorderTopYellowColorDirective extends BaseTailwindDirective {
  borderTopYellowColor = input<BorderTopYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_YELLOW_COLOR: this.borderTopYellowColor(),
      });
    });
  }
}