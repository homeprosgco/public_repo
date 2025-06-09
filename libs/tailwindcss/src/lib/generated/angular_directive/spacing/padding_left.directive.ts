import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { PaddingLeftType } from '../../tailwind_map_type/spacing/padding_left_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[paddingLeft]',
    standalone: true
})
export class PaddingLeftDirective extends BaseTailwindDirective {
  paddingLeft = input<PaddingLeftType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        PADDING_LEFT: this.paddingLeft(),
      });
    });
  }
}