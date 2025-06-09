import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentRedColorType } from '../../tailwind_map_type/interactivity/accent_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentRedColor]',
    standalone: true
})
export class AccentRedColorDirective extends BaseTailwindDirective {
  accentRedColor = input<AccentRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_RED_COLOR: this.accentRedColor(),
      });
    });
  }
}