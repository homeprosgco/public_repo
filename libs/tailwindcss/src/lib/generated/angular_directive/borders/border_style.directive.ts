import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderStyleType } from '../../tailwind_map_type/borders/border_style_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderStyle]',
    standalone: true
})
export class BorderStyleDirective extends BaseTailwindDirective {
  borderStyle = input<BorderStyleType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_STYLE: this.borderStyle(),
      });
    });
  }
}