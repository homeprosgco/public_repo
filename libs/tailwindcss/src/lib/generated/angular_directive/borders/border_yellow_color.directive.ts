import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderYellowColorType } from '../../tailwind_map_type/borders/border_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderYellowColor]',
    standalone: true
})
export class BorderYellowColorDirective extends BaseTailwindDirective {
  borderYellowColor = input<BorderYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_YELLOW_COLOR: this.borderYellowColor(),
      });
    });
  }
}