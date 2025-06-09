import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretGreenColorType } from '../../tailwind_map_type/interactivity/caret_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretGreenColor]',
    standalone: true
})
export class CaretGreenColorDirective extends BaseTailwindDirective {
  caretGreenColor = input<CaretGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_GREEN_COLOR: this.caretGreenColor(),
      });
    });
  }
}