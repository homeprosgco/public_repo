import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopPurpleColorType } from '../../tailwind_map_type/flexbox_grid/border_top_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopPurpleColor]',
    standalone: true
})
export class BorderTopPurpleColorDirective extends BaseTailwindDirective {
  borderTopPurpleColor = input<BorderTopPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_PURPLE_COLOR: this.borderTopPurpleColor(),
      });
    });
  }
}