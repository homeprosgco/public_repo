import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderWidthType } from '../../tailwind_map_type/borders/border_width_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderWidth]',
    standalone: true
})
export class BorderWidthDirective extends BaseTailwindDirective {
  borderWidth = input<BorderWidthType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_WIDTH: this.borderWidth(),
      });
    });
  }
}