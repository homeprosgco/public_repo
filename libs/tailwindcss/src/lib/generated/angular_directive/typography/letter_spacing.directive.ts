import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { LetterSpacingType } from '../../tailwind_map_type/typography/letter_spacing_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[letterSpacing]',
    standalone: true
})
export class LetterSpacingDirective extends BaseTailwindDirective {
  letterSpacing = input<LetterSpacingType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        LETTER_SPACING: this.letterSpacing(),
      });
    });
  }
}