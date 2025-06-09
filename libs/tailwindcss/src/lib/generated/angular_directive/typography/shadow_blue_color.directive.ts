import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowBlueColorType } from '../../tailwind_map_type/typography/shadow_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowBlueColor]',
    standalone: true
})
export class ShadowBlueColorDirective extends BaseTailwindDirective {
  shadowBlueColor = input<ShadowBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_BLUE_COLOR: this.shadowBlueColor(),
      });
    });
  }
}