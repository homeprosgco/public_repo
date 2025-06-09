import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentOrangeColorType } from '../../tailwind_map_type/interactivity/accent_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentOrangeColor]',
    standalone: true
})
export class AccentOrangeColorDirective extends BaseTailwindDirective {
  accentOrangeColor = input<AccentOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_ORANGE_COLOR: this.accentOrangeColor(),
      });
    });
  }
}