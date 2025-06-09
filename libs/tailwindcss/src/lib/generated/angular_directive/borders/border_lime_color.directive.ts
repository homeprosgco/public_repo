import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLimeColorType } from '../../tailwind_map_type/borders/border_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLimeColor]',
    standalone: true
})
export class BorderLimeColorDirective extends BaseTailwindDirective {
  borderLimeColor = input<BorderLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LIME_COLOR: this.borderLimeColor(),
      });
    });
  }
}