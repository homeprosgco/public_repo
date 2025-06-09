import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretOrangeColorType } from '../../tailwind_map_type/interactivity/caret_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretOrangeColor]',
    standalone: true
})
export class CaretOrangeColorDirective extends BaseTailwindDirective {
  caretOrangeColor = input<CaretOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_ORANGE_COLOR: this.caretOrangeColor(),
      });
    });
  }
}