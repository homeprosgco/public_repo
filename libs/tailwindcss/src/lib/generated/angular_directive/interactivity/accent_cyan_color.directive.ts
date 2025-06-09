import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentCyanColorType } from '../../tailwind_map_type/interactivity/accent_cyan_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentCyanColor]',
    standalone: true
})
export class AccentCyanColorDirective extends BaseTailwindDirective {
  accentCyanColor = input<AccentCyanColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_CYAN_COLOR: this.accentCyanColor(),
      });
    });
  }
}