import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { FontStyleType } from '../../tailwind_map_type/typography/font_style_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[fontStyle]',
    standalone: true
})
export class FontStyleDirective extends BaseTailwindDirective {
  fontStyle = input<FontStyleType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        FONT_STYLE: this.fontStyle(),
      });
    });
  }
}