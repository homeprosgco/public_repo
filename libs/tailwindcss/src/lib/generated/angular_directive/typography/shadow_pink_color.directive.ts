import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowPinkColorType } from '../../tailwind_map_type/typography/shadow_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowPinkColor]',
    standalone: true
})
export class ShadowPinkColorDirective extends BaseTailwindDirective {
  shadowPinkColor = input<ShadowPinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_PINK_COLOR: this.shadowPinkColor(),
      });
    });
  }
}