import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowRedColorType } from '../../tailwind_map_type/typography/shadow_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowRedColor]',
    standalone: true
})
export class ShadowRedColorDirective extends BaseTailwindDirective {
  shadowRedColor = input<ShadowRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_RED_COLOR: this.shadowRedColor(),
      });
    });
  }
}