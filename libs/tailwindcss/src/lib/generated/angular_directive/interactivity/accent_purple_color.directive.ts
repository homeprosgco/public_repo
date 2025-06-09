import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentPurpleColorType } from '../../tailwind_map_type/interactivity/accent_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentPurpleColor]',
    standalone: true
})
export class AccentPurpleColorDirective extends BaseTailwindDirective {
  accentPurpleColor = input<AccentPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_PURPLE_COLOR: this.accentPurpleColor(),
      });
    });
  }
}