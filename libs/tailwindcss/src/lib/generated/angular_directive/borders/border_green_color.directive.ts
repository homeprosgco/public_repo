import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderGreenColorType } from '../../tailwind_map_type/borders/border_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderGreenColor]',
    standalone: true
})
export class BorderGreenColorDirective extends BaseTailwindDirective {
  borderGreenColor = input<BorderGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_GREEN_COLOR: this.borderGreenColor(),
      });
    });
  }
}