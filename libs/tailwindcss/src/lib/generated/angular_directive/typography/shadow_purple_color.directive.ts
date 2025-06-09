import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowPurpleColorType } from '../../tailwind_map_type/typography/shadow_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowPurpleColor]',
    standalone: true
})
export class ShadowPurpleColorDirective extends BaseTailwindDirective {
  shadowPurpleColor = input<ShadowPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_PURPLE_COLOR: this.shadowPurpleColor(),
      });
    });
  }
}