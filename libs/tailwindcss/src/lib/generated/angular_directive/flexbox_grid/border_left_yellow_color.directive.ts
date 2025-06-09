import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftYellowColorType } from '../../tailwind_map_type/flexbox_grid/border_left_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftYellowColor]',
    standalone: true
})
export class BorderLeftYellowColorDirective extends BaseTailwindDirective {
  borderLeftYellowColor = input<BorderLeftYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_YELLOW_COLOR: this.borderLeftYellowColor(),
      });
    });
  }
}