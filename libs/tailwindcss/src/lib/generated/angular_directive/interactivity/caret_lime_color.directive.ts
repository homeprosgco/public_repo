import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretLimeColorType } from '../../tailwind_map_type/interactivity/caret_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretLimeColor]',
    standalone: true
})
export class CaretLimeColorDirective extends BaseTailwindDirective {
  caretLimeColor = input<CaretLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_LIME_COLOR: this.caretLimeColor(),
      });
    });
  }
}