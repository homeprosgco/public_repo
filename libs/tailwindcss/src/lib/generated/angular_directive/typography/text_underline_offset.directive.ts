import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TextUnderlineOffsetType } from '../../tailwind_map_type/typography/text_underline_offset_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[textUnderlineOffset]',
    standalone: true
})
export class TextUnderlineOffsetDirective extends BaseTailwindDirective {
  textUnderlineOffset = input<TextUnderlineOffsetType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TEXT_UNDERLINE_OFFSET: this.textUnderlineOffset(),
      });
    });
  }
}