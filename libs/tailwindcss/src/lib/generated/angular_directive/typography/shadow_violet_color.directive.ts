import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowVioletColorType } from '../../tailwind_map_type/typography/shadow_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowVioletColor]',
    standalone: true
})
export class ShadowVioletColorDirective extends BaseTailwindDirective {
  shadowVioletColor = input<ShadowVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_VIOLET_COLOR: this.shadowVioletColor(),
      });
    });
  }
}