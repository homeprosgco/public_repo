import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretIndigoColorType } from '../../tailwind_map_type/interactivity/caret_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretIndigoColor]',
    standalone: true
})
export class CaretIndigoColorDirective extends BaseTailwindDirective {
  caretIndigoColor = input<CaretIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_INDIGO_COLOR: this.caretIndigoColor(),
      });
    });
  }
}