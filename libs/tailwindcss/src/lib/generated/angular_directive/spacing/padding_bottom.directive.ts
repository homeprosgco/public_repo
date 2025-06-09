import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { PaddingBottomType } from '../../tailwind_map_type/spacing/padding_bottom_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[paddingBottom]',
    standalone: true
})
export class PaddingBottomDirective extends BaseTailwindDirective {
  paddingBottom = input<PaddingBottomType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        PADDING_BOTTOM: this.paddingBottom(),
      });
    });
  }
}