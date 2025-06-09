import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderOrangeColorType } from '../../tailwind_map_type/borders/border_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderOrangeColor]',
    standalone: true
})
export class BorderOrangeColorDirective extends BaseTailwindDirective {
  borderOrangeColor = input<BorderOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_ORANGE_COLOR: this.borderOrangeColor(),
      });
    });
  }
}