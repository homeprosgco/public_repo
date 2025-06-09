import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowOrangeColorType } from '../../tailwind_map_type/typography/shadow_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowOrangeColor]',
    standalone: true
})
export class ShadowOrangeColorDirective extends BaseTailwindDirective {
  shadowOrangeColor = input<ShadowOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_ORANGE_COLOR: this.shadowOrangeColor(),
      });
    });
  }
}