import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentTealColorType } from '../../tailwind_map_type/interactivity/accent_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentTealColor]',
    standalone: true
})
export class AccentTealColorDirective extends BaseTailwindDirective {
  accentTealColor = input<AccentTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_TEAL_COLOR: this.accentTealColor(),
      });
    });
  }
}