import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftZincColorType } from '../../tailwind_map_type/flexbox_grid/border_left_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftZincColor]',
    standalone: true
})
export class BorderLeftZincColorDirective extends BaseTailwindDirective {
  borderLeftZincColor = input<BorderLeftZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_ZINC_COLOR: this.borderLeftZincColor(),
      });
    });
  }
}