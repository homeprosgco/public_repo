import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftGrayColorType } from '../../tailwind_map_type/flexbox_grid/border_left_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftGrayColor]',
    standalone: true
})
export class BorderLeftGrayColorDirective extends BaseTailwindDirective {
  borderLeftGrayColor = input<BorderLeftGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_GRAY_COLOR: this.borderLeftGrayColor(),
      });
    });
  }
}