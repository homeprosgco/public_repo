import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowLimeColorType } from '../../tailwind_map_type/typography/shadow_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowLimeColor]',
    standalone: true
})
export class ShadowLimeColorDirective extends BaseTailwindDirective {
  shadowLimeColor = input<ShadowLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_LIME_COLOR: this.shadowLimeColor(),
      });
    });
  }
}