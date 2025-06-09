import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineStoneColorType } from '../../tailwind_map_type/borders/outline_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineStoneColor]',
    standalone: true
})
export class OutlineStoneColorDirective extends BaseTailwindDirective {
  outlineStoneColor = input<OutlineStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_STONE_COLOR: this.outlineStoneColor(),
      });
    });
  }
}