import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowZincColorType } from '../../tailwind_map_type/typography/shadow_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowZincColor]',
    standalone: true
})
export class ShadowZincColorDirective extends BaseTailwindDirective {
  shadowZincColor = input<ShadowZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_ZINC_COLOR: this.shadowZincColor(),
      });
    });
  }
}