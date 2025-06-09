import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentGrayColorType } from '../../tailwind_map_type/interactivity/accent_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentGrayColor]',
    standalone: true
})
export class AccentGrayColorDirective extends BaseTailwindDirective {
  accentGrayColor = input<AccentGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_GRAY_COLOR: this.accentGrayColor(),
      });
    });
  }
}