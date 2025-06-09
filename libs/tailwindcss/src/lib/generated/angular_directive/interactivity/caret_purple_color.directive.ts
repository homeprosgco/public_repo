import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretPurpleColorType } from '../../tailwind_map_type/interactivity/caret_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretPurpleColor]',
    standalone: true
})
export class CaretPurpleColorDirective extends BaseTailwindDirective {
  caretPurpleColor = input<CaretPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_PURPLE_COLOR: this.caretPurpleColor(),
      });
    });
  }
}