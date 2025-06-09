import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BottomType } from '../../tailwind_map_type/layout/bottom_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[bottom]',
    standalone: true
})
export class BottomDirective extends BaseTailwindDirective {
  bottom = input<BottomType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BOTTOM: this.bottom(),
      });
    });
  }
}