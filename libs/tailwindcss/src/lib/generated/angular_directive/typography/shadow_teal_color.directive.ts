import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowTealColorType } from '../../tailwind_map_type/typography/shadow_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowTealColor]',
    standalone: true
})
export class ShadowTealColorDirective extends BaseTailwindDirective {
  shadowTealColor = input<ShadowTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_TEAL_COLOR: this.shadowTealColor(),
      });
    });
  }
}