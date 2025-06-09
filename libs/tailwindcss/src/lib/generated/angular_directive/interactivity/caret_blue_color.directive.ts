import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretBlueColorType } from '../../tailwind_map_type/interactivity/caret_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretBlueColor]',
    standalone: true
})
export class CaretBlueColorDirective extends BaseTailwindDirective {
  caretBlueColor = input<CaretBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_BLUE_COLOR: this.caretBlueColor(),
      });
    });
  }
}