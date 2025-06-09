import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretNeutralColorType } from '../../tailwind_map_type/interactivity/caret_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretNeutralColor]',
    standalone: true
})
export class CaretNeutralColorDirective extends BaseTailwindDirective {
  caretNeutralColor = input<CaretNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_NEUTRAL_COLOR: this.caretNeutralColor(),
      });
    });
  }
}