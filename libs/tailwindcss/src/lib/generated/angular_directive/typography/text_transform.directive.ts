import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TextTransformType } from '../../tailwind_map_type/typography/text_transform_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[textTransform]',
    standalone: true
})
export class TextTransformDirective extends BaseTailwindDirective {
  textTransform = input<TextTransformType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TEXT_TRANSFORM: this.textTransform(),
      });
    });
  }
}