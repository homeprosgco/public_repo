import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretTealColorType } from '../../tailwind_map_type/interactivity/caret_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretTealColor]',
    standalone: true
})
export class CaretTealColorDirective extends BaseTailwindDirective {
  caretTealColor = input<CaretTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_TEAL_COLOR: this.caretTealColor(),
      });
    });
  }
}