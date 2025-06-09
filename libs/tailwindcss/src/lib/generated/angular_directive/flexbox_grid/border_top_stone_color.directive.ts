import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopStoneColorType } from '../../tailwind_map_type/flexbox_grid/border_top_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopStoneColor]',
    standalone: true
})
export class BorderTopStoneColorDirective extends BaseTailwindDirective {
  borderTopStoneColor = input<BorderTopStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_STONE_COLOR: this.borderTopStoneColor(),
      });
    });
  }
}