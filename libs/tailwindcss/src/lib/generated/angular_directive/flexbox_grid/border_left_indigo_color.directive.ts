import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftIndigoColorType } from '../../tailwind_map_type/flexbox_grid/border_left_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftIndigoColor]',
    standalone: true
})
export class BorderLeftIndigoColorDirective extends BaseTailwindDirective {
  borderLeftIndigoColor = input<BorderLeftIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_INDIGO_COLOR: this.borderLeftIndigoColor(),
      });
    });
  }
}