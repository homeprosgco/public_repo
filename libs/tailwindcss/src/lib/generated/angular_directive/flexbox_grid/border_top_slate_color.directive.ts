import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopSlateColorType } from '../../tailwind_map_type/flexbox_grid/border_top_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopSlateColor]',
    standalone: true
})
export class BorderTopSlateColorDirective extends BaseTailwindDirective {
  borderTopSlateColor = input<BorderTopSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_SLATE_COLOR: this.borderTopSlateColor(),
      });
    });
  }
}