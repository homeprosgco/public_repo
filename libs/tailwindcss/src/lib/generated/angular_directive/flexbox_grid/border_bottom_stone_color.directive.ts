import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomStoneColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomStoneColor]',
    standalone: true
})
export class BorderBottomStoneColorDirective extends BaseTailwindDirective {
  borderBottomStoneColor = input<BorderBottomStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_STONE_COLOR: this.borderBottomStoneColor(),
      });
    });
  }
}