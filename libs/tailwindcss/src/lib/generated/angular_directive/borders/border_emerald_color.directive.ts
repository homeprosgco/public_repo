import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderEmeraldColorType } from '../../tailwind_map_type/borders/border_emerald_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderEmeraldColor]',
    standalone: true
})
export class BorderEmeraldColorDirective extends BaseTailwindDirective {
  borderEmeraldColor = input<BorderEmeraldColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_EMERALD_COLOR: this.borderEmeraldColor(),
      });
    });
  }
}