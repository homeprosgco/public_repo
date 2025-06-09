import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderStoneColorType } from '../../tailwind_map_type/borders/border_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderStoneColor]',
    standalone: true
})
export class BorderStoneColorDirective extends BaseTailwindDirective {
  borderStoneColor = input<BorderStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_STONE_COLOR: this.borderStoneColor(),
      });
    });
  }
}