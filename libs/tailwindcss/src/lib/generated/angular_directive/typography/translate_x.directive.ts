import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TranslateXType } from '../../tailwind_map_type/typography/translate_x_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[translateX]',
    standalone: true
})
export class TranslateXDirective extends BaseTailwindDirective {
  translateX = input<TranslateXType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TRANSLATE_X: this.translateX(),
      });
    });
  }
}