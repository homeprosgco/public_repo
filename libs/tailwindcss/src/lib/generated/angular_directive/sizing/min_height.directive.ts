import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MinHeightType } from '../../tailwind_map_type/sizing/min_height_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[minHeight]',
    standalone: true
})
export class MinHeightDirective extends BaseTailwindDirective {
  minHeight = input<MinHeightType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MIN_HEIGHT: this.minHeight(),
      });
    });
  }
}