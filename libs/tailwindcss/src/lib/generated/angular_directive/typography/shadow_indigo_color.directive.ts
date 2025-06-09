import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowIndigoColorType } from '../../tailwind_map_type/typography/shadow_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowIndigoColor]',
    standalone: true
})
export class ShadowIndigoColorDirective extends BaseTailwindDirective {
  shadowIndigoColor = input<ShadowIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_INDIGO_COLOR: this.shadowIndigoColor(),
      });
    });
  }
}