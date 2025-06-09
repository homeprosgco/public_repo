import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FontFamilyType } from '../../tailwind_map_type/typography/font_family_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[fontFamily]',
    standalone: true
})
export class FontFamilyDirective extends BaseTailwindDirective {
  fontFamily = input<FontFamilyType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FONT_FAMILY: this.fontFamily(),
      });
    });
  }
}