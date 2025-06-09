import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowNeutralColorType } from '../../tailwind_map_type/typography/shadow_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowNeutralColor]',
    standalone: true
})
export class ShadowNeutralColorDirective extends BaseTailwindDirective {
  shadowNeutralColor = input<ShadowNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_NEUTRAL_COLOR: this.shadowNeutralColor(),
      });
    });
  }
}