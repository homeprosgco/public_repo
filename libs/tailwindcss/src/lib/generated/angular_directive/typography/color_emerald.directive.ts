import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorEmeraldType } from '../../tailwind_map_type/typography/color_emerald_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorEmerald]',
    standalone: true
})
export class ColorEmeraldDirective extends BaseTailwindDirective {
  colorEmerald = input<ColorEmeraldType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_EMERALD: this.colorEmerald(),
      });
    });
  }
}