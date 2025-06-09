import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretColorType } from '../../tailwind_map_type/interactivity/caret_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretColor]',
    standalone: true
})
export class CaretColorDirective extends BaseTailwindDirective {
  caretColor = input<CaretColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_COLOR: this.caretColor(),
      });
    });
  }
}