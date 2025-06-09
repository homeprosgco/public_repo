import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderPurpleColorType } from '../../tailwind_map_type/borders/border_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderPurpleColor]',
    standalone: true
})
export class BorderPurpleColorDirective extends BaseTailwindDirective {
  borderPurpleColor = input<BorderPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_PURPLE_COLOR: this.borderPurpleColor(),
      });
    });
  }
}