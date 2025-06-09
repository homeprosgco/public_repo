import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderFuchsiaColorType } from '../../tailwind_map_type/borders/border_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderFuchsiaColor]',
    standalone: true
})
export class BorderFuchsiaColorDirective extends BaseTailwindDirective {
  borderFuchsiaColor = input<BorderFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_FUCHSIA_COLOR: this.borderFuchsiaColor(),
      });
    });
  }
}