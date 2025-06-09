import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { CaretFuchsiaColorType } from '../../tailwind_map_type/interactivity/caret_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[caretFuchsiaColor]',
    standalone: true
})
export class CaretFuchsiaColorDirective extends BaseTailwindDirective {
  caretFuchsiaColor = input<CaretFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CARET_FUCHSIA_COLOR: this.caretFuchsiaColor(),
      });
    });
  }
}