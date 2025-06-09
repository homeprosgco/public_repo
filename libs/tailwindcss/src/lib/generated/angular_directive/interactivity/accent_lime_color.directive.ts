import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentLimeColorType } from '../../tailwind_map_type/interactivity/accent_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentLimeColor]',
    standalone: true
})
export class AccentLimeColorDirective extends BaseTailwindDirective {
  accentLimeColor = input<AccentLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_LIME_COLOR: this.accentLimeColor(),
      });
    });
  }
}