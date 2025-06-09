import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderGrayColorType } from '../../tailwind_map_type/borders/border_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderGrayColor]',
    standalone: true
})
export class BorderGrayColorDirective extends BaseTailwindDirective {
  borderGrayColor = input<BorderGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_GRAY_COLOR: this.borderGrayColor(),
      });
    });
  }
}