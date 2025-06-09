import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomSlateColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomSlateColor]',
    standalone: true
})
export class BorderBottomSlateColorDirective extends BaseTailwindDirective {
  borderBottomSlateColor = input<BorderBottomSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_SLATE_COLOR: this.borderBottomSlateColor(),
      });
    });
  }
}