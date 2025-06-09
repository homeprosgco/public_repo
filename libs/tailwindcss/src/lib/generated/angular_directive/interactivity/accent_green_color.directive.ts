import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentGreenColorType } from '../../tailwind_map_type/interactivity/accent_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentGreenColor]',
    standalone: true
})
export class AccentGreenColorDirective extends BaseTailwindDirective {
  accentGreenColor = input<AccentGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_GREEN_COLOR: this.accentGreenColor(),
      });
    });
  }
}