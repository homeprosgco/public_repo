import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TextOverflowType } from '../../tailwind_map_type/typography/text_overflow_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[textOverflow]',
    standalone: true
})
export class TextOverflowDirective extends BaseTailwindDirective {
  textOverflow = input<TextOverflowType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TEXT_OVERFLOW: this.textOverflow(),
      });
    });
  }
}