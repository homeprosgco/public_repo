import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TextDecorationLineType } from '../../tailwind_map_type/typography/text_decoration_line_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[textDecorationLine]',
    standalone: true
})
export class TextDecorationLineDirective extends BaseTailwindDirective {
  textDecorationLine = input<TextDecorationLineType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TEXT_DECORATION_LINE: this.textDecorationLine(),
      });
    });
  }
}