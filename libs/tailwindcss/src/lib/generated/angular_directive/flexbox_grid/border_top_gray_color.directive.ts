import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopGrayColorType } from '../../tailwind_map_type/flexbox_grid/border_top_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopGrayColor]',
    standalone: true
})
export class BorderTopGrayColorDirective extends BaseTailwindDirective {
  borderTopGrayColor = input<BorderTopGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_GRAY_COLOR: this.borderTopGrayColor(),
      });
    });
  }
}