import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretGrayColorType } from '../../tailwind_map_type/interactivity/caret_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretGrayColor]',
    standalone: true
})
export class CaretGrayColorDirective extends BaseTailwindDirective {
  caretGrayColor = input<CaretGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_GRAY_COLOR: this.caretGrayColor(),
      });
    });
  }
}