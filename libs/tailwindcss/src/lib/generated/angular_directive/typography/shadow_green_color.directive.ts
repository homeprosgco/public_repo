import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowGreenColorType } from '../../tailwind_map_type/typography/shadow_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowGreenColor]',
    standalone: true
})
export class ShadowGreenColorDirective extends BaseTailwindDirective {
  shadowGreenColor = input<ShadowGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_GREEN_COLOR: this.shadowGreenColor(),
      });
    });
  }
}