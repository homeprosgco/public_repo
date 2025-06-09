import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftBlueColorType } from '../../tailwind_map_type/flexbox_grid/border_left_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftBlueColor]',
    standalone: true
})
export class BorderLeftBlueColorDirective extends BaseTailwindDirective {
  borderLeftBlueColor = input<BorderLeftBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_BLUE_COLOR: this.borderLeftBlueColor(),
      });
    });
  }
}