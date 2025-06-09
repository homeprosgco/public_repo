import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FontVariantNumericType } from '../../tailwind_map_type/typography/font_variant_numeric_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[fontVariantNumeric]',
    standalone: true
})
export class FontVariantNumericDirective extends BaseTailwindDirective {
  fontVariantNumeric = input<FontVariantNumericType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FONT_VARIANT_NUMERIC: this.fontVariantNumeric(),
      });
    });
  }
}