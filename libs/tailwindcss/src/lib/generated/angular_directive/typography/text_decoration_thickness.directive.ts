import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TextDecorationThicknessType } from '../../tailwind_map_type/typography/text_decoration_thickness_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[textDecorationThickness]',
    standalone: true
})
export class TextDecorationThicknessDirective extends BaseTailwindDirective {
  textDecorationThickness = input<TextDecorationThicknessType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TEXT_DECORATION_THICKNESS: this.textDecorationThickness(),
      });
    });
  }
}