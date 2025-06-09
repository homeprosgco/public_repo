import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MarginType } from '../../tailwind_map_type/spacing/margin_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[margin]',
    standalone: true
})
export class MarginDirective extends BaseTailwindDirective {
  margin = input<MarginType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MARGIN: this.margin(),
      });
    });
  }
}