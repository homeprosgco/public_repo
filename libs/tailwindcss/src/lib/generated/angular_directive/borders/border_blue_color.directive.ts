import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBlueColorType } from '../../tailwind_map_type/borders/border_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBlueColor]',
    standalone: true
})
export class BorderBlueColorDirective extends BaseTailwindDirective {
  borderBlueColor = input<BorderBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BLUE_COLOR: this.borderBlueColor(),
      });
    });
  }
}