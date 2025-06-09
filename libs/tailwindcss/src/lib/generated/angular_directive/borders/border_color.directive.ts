import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderColorType } from '../../tailwind_map_type/borders/border_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderColor]',
    standalone: true
})
export class BorderColorDirective extends BaseTailwindDirective {
  borderColor = input<BorderColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_COLOR: this.borderColor(),
      });
    });
  }
}