import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretRoseColorType } from '../../tailwind_map_type/interactivity/caret_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretRoseColor]',
    standalone: true
})
export class CaretRoseColorDirective extends BaseTailwindDirective {
  caretRoseColor = input<CaretRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_ROSE_COLOR: this.caretRoseColor(),
      });
    });
  }
}