import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { VerticalAlignType } from '../../tailwind_map_type/typography/vertical_align_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[verticalAlign]',
    standalone: true
})
export class VerticalAlignDirective extends BaseTailwindDirective {
  verticalAlign = input<VerticalAlignType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        VERTICAL_ALIGN: this.verticalAlign(),
      });
    });
  }
}