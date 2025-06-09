import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftPurpleColorType } from '../../tailwind_map_type/flexbox_grid/border_left_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftPurpleColor]',
    standalone: true
})
export class BorderLeftPurpleColorDirective extends BaseTailwindDirective {
  borderLeftPurpleColor = input<BorderLeftPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_PURPLE_COLOR: this.borderLeftPurpleColor(),
      });
    });
  }
}