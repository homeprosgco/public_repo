import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomLimeColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomLimeColor]',
    standalone: true
})
export class BorderBottomLimeColorDirective extends BaseTailwindDirective {
  borderBottomLimeColor = input<BorderBottomLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_LIME_COLOR: this.borderBottomLimeColor(),
      });
    });
  }
}