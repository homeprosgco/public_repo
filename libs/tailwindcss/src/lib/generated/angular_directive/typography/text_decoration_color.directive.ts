import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TextDecorationColorType } from '../../tailwind_map_type/typography/text_decoration_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[textDecorationColor]',
    standalone: true
})
export class TextDecorationColorDirective extends BaseTailwindDirective {
  textDecorationColor = input<TextDecorationColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TEXT_DECORATION_COLOR: this.textDecorationColor(),
      });
    });
  }
}