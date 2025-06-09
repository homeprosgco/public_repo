import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderSlateColorType } from '../../tailwind_map_type/borders/border_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderSlateColor]',
    standalone: true
})
export class BorderSlateColorDirective extends BaseTailwindDirective {
  borderSlateColor = input<BorderSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_SLATE_COLOR: this.borderSlateColor(),
      });
    });
  }
}