import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MaxHeightType } from '../../tailwind_map_type/sizing/max_height_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[maxHeight]',
    standalone: true
})
export class MaxHeightDirective extends BaseTailwindDirective {
  maxHeight = input<MaxHeightType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MAX_HEIGHT: this.maxHeight(),
      });
    });
  }
}