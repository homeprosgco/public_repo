import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretRedColorType } from '../../tailwind_map_type/interactivity/caret_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretRedColor]',
    standalone: true
})
export class CaretRedColorDirective extends BaseTailwindDirective {
  caretRedColor = input<CaretRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_RED_COLOR: this.caretRedColor(),
      });
    });
  }
}