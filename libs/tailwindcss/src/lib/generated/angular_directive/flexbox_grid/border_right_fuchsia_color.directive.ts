import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightFuchsiaColorType } from '../../tailwind_map_type/flexbox_grid/border_right_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightFuchsiaColor]',
    standalone: true
})
export class BorderRightFuchsiaColorDirective extends BaseTailwindDirective {
  borderRightFuchsiaColor = input<BorderRightFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_FUCHSIA_COLOR: this.borderRightFuchsiaColor(),
      });
    });
  }
}