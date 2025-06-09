import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentYellowColorType } from '../../tailwind_map_type/interactivity/accent_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentYellowColor]',
    standalone: true
})
export class AccentYellowColorDirective extends BaseTailwindDirective {
  accentYellowColor = input<AccentYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_YELLOW_COLOR: this.accentYellowColor(),
      });
    });
  }
}