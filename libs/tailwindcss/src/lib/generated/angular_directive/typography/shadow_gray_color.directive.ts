import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowGrayColorType } from '../../tailwind_map_type/typography/shadow_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowGrayColor]',
    standalone: true
})
export class ShadowGrayColorDirective extends BaseTailwindDirective {
  shadowGrayColor = input<ShadowGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_GRAY_COLOR: this.shadowGrayColor(),
      });
    });
  }
}