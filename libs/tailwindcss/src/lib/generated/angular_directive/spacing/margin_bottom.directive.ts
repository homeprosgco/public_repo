import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MarginBottomType } from '../../tailwind_map_type/spacing/margin_bottom_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[marginBottom]',
    standalone: true
})
export class MarginBottomDirective extends BaseTailwindDirective {
  marginBottom = input<MarginBottomType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MARGIN_BOTTOM: this.marginBottom(),
      });
    });
  }
}