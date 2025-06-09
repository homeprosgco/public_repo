import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderCyanColorType } from '../../tailwind_map_type/borders/border_cyan_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderCyanColor]',
    standalone: true
})
export class BorderCyanColorDirective extends BaseTailwindDirective {
  borderCyanColor = input<BorderCyanColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_CYAN_COLOR: this.borderCyanColor(),
      });
    });
  }
}