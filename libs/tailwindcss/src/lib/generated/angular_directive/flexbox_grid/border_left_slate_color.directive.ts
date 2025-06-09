import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftSlateColorType } from '../../tailwind_map_type/flexbox_grid/border_left_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftSlateColor]',
    standalone: true
})
export class BorderLeftSlateColorDirective extends BaseTailwindDirective {
  borderLeftSlateColor = input<BorderLeftSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_SLATE_COLOR: this.borderLeftSlateColor(),
      });
    });
  }
}