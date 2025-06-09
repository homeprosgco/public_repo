import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderZincColorType } from '../../tailwind_map_type/borders/border_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderZincColor]',
    standalone: true
})
export class BorderZincColorDirective extends BaseTailwindDirective {
  borderZincColor = input<BorderZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_ZINC_COLOR: this.borderZincColor(),
      });
    });
  }
}