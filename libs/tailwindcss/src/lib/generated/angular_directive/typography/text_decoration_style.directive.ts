import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TextDecorationStyleType } from '../../tailwind_map_type/typography/text_decoration_style_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[textDecorationStyle]',
    standalone: true
})
export class TextDecorationStyleDirective extends BaseTailwindDirective {
  textDecorationStyle = input<TextDecorationStyleType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TEXT_DECORATION_STYLE: this.textDecorationStyle(),
      });
    });
  }
}