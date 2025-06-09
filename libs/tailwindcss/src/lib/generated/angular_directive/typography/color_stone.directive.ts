import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorStoneType } from '../../tailwind_map_type/typography/color_stone_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorStone]',
    standalone: true
})
export class ColorStoneDirective extends BaseTailwindDirective {
  colorStone = input<ColorStoneType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_STONE: this.colorStone(),
      });
    });
  }
}