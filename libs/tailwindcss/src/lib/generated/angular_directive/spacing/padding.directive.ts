import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { PaddingType } from '../../tailwind_map_type/spacing/padding_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[padding]',
    standalone: true
})
export class PaddingDirective extends BaseTailwindDirective {
  padding = input<PaddingType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        PADDING: this.padding(),
      });
    });
  }
}