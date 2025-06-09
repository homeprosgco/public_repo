import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { PaddingRightType } from '../../tailwind_map_type/spacing/padding_right_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[paddingRight]',
    standalone: true
})
export class PaddingRightDirective extends BaseTailwindDirective {
  paddingRight = input<PaddingRightType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        PADDING_RIGHT: this.paddingRight(),
      });
    });
  }
}