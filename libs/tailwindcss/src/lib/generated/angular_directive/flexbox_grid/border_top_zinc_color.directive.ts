import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopZincColorType } from '../../tailwind_map_type/flexbox_grid/border_top_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopZincColor]',
    standalone: true
})
export class BorderTopZincColorDirective extends BaseTailwindDirective {
  borderTopZincColor = input<BorderTopZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_ZINC_COLOR: this.borderTopZincColor(),
      });
    });
  }
}