import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftStoneColorType } from '../../tailwind_map_type/flexbox_grid/border_left_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftStoneColor]',
    standalone: true
})
export class BorderLeftStoneColorDirective extends BaseTailwindDirective {
  borderLeftStoneColor = input<BorderLeftStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_STONE_COLOR: this.borderLeftStoneColor(),
      });
    });
  }
}