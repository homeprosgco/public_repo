import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentVioletColorType } from '../../tailwind_map_type/interactivity/accent_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentVioletColor]',
    standalone: true
})
export class AccentVioletColorDirective extends BaseTailwindDirective {
  accentVioletColor = input<AccentVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_VIOLET_COLOR: this.accentVioletColor(),
      });
    });
  }
}