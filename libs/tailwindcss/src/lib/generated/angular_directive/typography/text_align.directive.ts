import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TextAlignType } from '../../tailwind_map_type/typography/text_align_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[textAlign]',
    standalone: true
})
export class TextAlignDirective extends BaseTailwindDirective {
  textAlign = input<TextAlignType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TEXT_ALIGN: this.textAlign(),
      });
    });
  }
}