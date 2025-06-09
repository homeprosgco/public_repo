import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TextWrapType } from '../../tailwind_map_type/typography/text_wrap_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[textWrap]',
    standalone: true
})
export class TextWrapDirective extends BaseTailwindDirective {
  textWrap = input<TextWrapType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TEXT_WRAP: this.textWrap(),
      });
    });
  }
}