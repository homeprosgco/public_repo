import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightSlateColorType } from '../../tailwind_map_type/flexbox_grid/border_right_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightSlateColor]',
    standalone: true
})
export class BorderRightSlateColorDirective extends BaseTailwindDirective {
  borderRightSlateColor = input<BorderRightSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_SLATE_COLOR: this.borderRightSlateColor(),
      });
    });
  }
}