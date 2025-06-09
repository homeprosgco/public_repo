import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundRedColorType } from '../../tailwind_map_type/backgrounds/background_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundRedColor]',
    standalone: true
})
export class BackgroundRedColorDirective extends BaseTailwindDirective {
  backgroundRedColor = input<BackgroundRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_RED_COLOR: this.backgroundRedColor(),
      });
    });
  }
}