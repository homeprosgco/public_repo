import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentNeutralColorType } from '../../tailwind_map_type/interactivity/accent_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentNeutralColor]',
    standalone: true
})
export class AccentNeutralColorDirective extends BaseTailwindDirective {
  accentNeutralColor = input<AccentNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_NEUTRAL_COLOR: this.accentNeutralColor(),
      });
    });
  }
}