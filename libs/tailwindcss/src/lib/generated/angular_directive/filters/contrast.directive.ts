import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ContrastType } from '../../tailwind_map_type/filters/contrast_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[contrast]',
    standalone: true
})
export class ContrastDirective extends BaseTailwindDirective {
  contrast = input<ContrastType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CONTRAST: this.contrast(),
      });
    });
  }
}