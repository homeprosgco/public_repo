import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretYellowColorType } from '../../tailwind_map_type/interactivity/caret_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretYellowColor]',
    standalone: true
})
export class CaretYellowColorDirective extends BaseTailwindDirective {
  caretYellowColor = input<CaretYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_YELLOW_COLOR: this.caretYellowColor(),
      });
    });
  }
}