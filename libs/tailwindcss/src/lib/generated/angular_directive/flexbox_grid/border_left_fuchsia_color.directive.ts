import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftFuchsiaColorType } from '../../tailwind_map_type/flexbox_grid/border_left_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftFuchsiaColor]',
    standalone: true
})
export class BorderLeftFuchsiaColorDirective extends BaseTailwindDirective {
  borderLeftFuchsiaColor = input<BorderLeftFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_FUCHSIA_COLOR: this.borderLeftFuchsiaColor(),
      });
    });
  }
}