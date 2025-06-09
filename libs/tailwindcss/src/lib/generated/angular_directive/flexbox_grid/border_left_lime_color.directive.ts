import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftLimeColorType } from '../../tailwind_map_type/flexbox_grid/border_left_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftLimeColor]',
    standalone: true
})
export class BorderLeftLimeColorDirective extends BaseTailwindDirective {
  borderLeftLimeColor = input<BorderLeftLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_LIME_COLOR: this.borderLeftLimeColor(),
      });
    });
  }
}