import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretVioletColorType } from '../../tailwind_map_type/interactivity/caret_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretVioletColor]',
    standalone: true
})
export class CaretVioletColorDirective extends BaseTailwindDirective {
  caretVioletColor = input<CaretVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_VIOLET_COLOR: this.caretVioletColor(),
      });
    });
  }
}