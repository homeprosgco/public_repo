import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FontSizeType } from '../../tailwind_map_type/typography/font_size_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[fontSize]',
    standalone: true
})
export class FontSizeDirective extends BaseTailwindDirective {
  fontSize = input<FontSizeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FONT_SIZE: this.fontSize(),
      });
    });
  }
}