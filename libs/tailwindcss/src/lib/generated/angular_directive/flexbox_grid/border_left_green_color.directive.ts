import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftGreenColorType } from '../../tailwind_map_type/flexbox_grid/border_left_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftGreenColor]',
    standalone: true
})
export class BorderLeftGreenColorDirective extends BaseTailwindDirective {
  borderLeftGreenColor = input<BorderLeftGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_GREEN_COLOR: this.borderLeftGreenColor(),
      });
    });
  }
}