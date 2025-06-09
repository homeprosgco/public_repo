import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TranslateYType } from '../../tailwind_map_type/typography/translate_y_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[translateY]',
    standalone: true
})
export class TranslateYDirective extends BaseTailwindDirective {
  translateY = input<TranslateYType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TRANSLATE_Y: this.translateY(),
      });
    });
  }
}