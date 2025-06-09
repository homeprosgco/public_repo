import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopIndigoColorType } from '../../tailwind_map_type/flexbox_grid/border_top_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopIndigoColor]',
    standalone: true
})
export class BorderTopIndigoColorDirective extends BaseTailwindDirective {
  borderTopIndigoColor = input<BorderTopIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_INDIGO_COLOR: this.borderTopIndigoColor(),
      });
    });
  }
}