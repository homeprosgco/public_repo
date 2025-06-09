import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretZincColorType } from '../../tailwind_map_type/interactivity/caret_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretZincColor]',
    standalone: true
})
export class CaretZincColorDirective extends BaseTailwindDirective {
  caretZincColor = input<CaretZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_ZINC_COLOR: this.caretZincColor(),
      });
    });
  }
}