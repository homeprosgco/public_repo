import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderIndigoColorType } from '../../tailwind_map_type/borders/border_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderIndigoColor]',
    standalone: true
})
export class BorderIndigoColorDirective extends BaseTailwindDirective {
  borderIndigoColor = input<BorderIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INDIGO_COLOR: this.borderIndigoColor(),
      });
    });
  }
}