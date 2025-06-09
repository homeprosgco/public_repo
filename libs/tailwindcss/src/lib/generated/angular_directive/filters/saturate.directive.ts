import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { SaturateType } from '../../tailwind_map_type/filters/saturate_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[saturate]',
    standalone: true
})
export class SaturateDirective extends BaseTailwindDirective {
  saturate = input<SaturateType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SATURATE: this.saturate(),
      });
    });
  }
}