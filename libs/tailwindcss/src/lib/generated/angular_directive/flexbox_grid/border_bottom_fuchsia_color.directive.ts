import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomFuchsiaColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomFuchsiaColor]',
    standalone: true
})
export class BorderBottomFuchsiaColorDirective extends BaseTailwindDirective {
  borderBottomFuchsiaColor = input<BorderBottomFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_FUCHSIA_COLOR: this.borderBottomFuchsiaColor(),
      });
    });
  }
}