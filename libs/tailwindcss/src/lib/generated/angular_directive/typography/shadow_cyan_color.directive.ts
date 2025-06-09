import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowCyanColorType } from '../../tailwind_map_type/typography/shadow_cyan_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowCyanColor]',
    standalone: true
})
export class ShadowCyanColorDirective extends BaseTailwindDirective {
  shadowCyanColor = input<ShadowCyanColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_CYAN_COLOR: this.shadowCyanColor(),
      });
    });
  }
}