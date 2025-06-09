import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentPinkColorType } from '../../tailwind_map_type/interactivity/accent_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentPinkColor]',
    standalone: true
})
export class AccentPinkColorDirective extends BaseTailwindDirective {
  accentPinkColor = input<AccentPinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_PINK_COLOR: this.accentPinkColor(),
      });
    });
  }
}