import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FontWeightType } from '../../tailwind_map_type/typography/font_weight_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[fontWeight]',
    standalone: true
})
export class FontWeightDirective extends BaseTailwindDirective {
  fontWeight = input<FontWeightType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FONT_WEIGHT: this.fontWeight(),
      });
    });
  }
}