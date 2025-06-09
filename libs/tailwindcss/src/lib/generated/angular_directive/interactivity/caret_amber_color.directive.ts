import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretAmberColorType } from '../../tailwind_map_type/interactivity/caret_amber_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretAmberColor]',
    standalone: true
})
export class CaretAmberColorDirective extends BaseTailwindDirective {
  caretAmberColor = input<CaretAmberColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_AMBER_COLOR: this.caretAmberColor(),
      });
    });
  }
}