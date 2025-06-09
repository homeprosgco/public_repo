import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentRoseColorType } from '../../tailwind_map_type/interactivity/accent_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentRoseColor]',
    standalone: true
})
export class AccentRoseColorDirective extends BaseTailwindDirective {
  accentRoseColor = input<AccentRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_ROSE_COLOR: this.accentRoseColor(),
      });
    });
  }
}