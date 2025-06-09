import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretStoneColorType } from '../../tailwind_map_type/interactivity/caret_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretStoneColor]',
    standalone: true
})
export class CaretStoneColorDirective extends BaseTailwindDirective {
  caretStoneColor = input<CaretStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_STONE_COLOR: this.caretStoneColor(),
      });
    });
  }
}