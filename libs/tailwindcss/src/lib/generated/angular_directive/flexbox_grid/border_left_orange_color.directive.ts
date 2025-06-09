import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftOrangeColorType } from '../../tailwind_map_type/flexbox_grid/border_left_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftOrangeColor]',
    standalone: true
})
export class BorderLeftOrangeColorDirective extends BaseTailwindDirective {
  borderLeftOrangeColor = input<BorderLeftOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_ORANGE_COLOR: this.borderLeftOrangeColor(),
      });
    });
  }
}