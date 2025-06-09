import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { SepiaType } from '../../tailwind_map_type/filters/sepia_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[sepia]',
    standalone: true
})
export class SepiaDirective extends BaseTailwindDirective {
  sepia = input<SepiaType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SEPIA: this.sepia(),
      });
    });
  }
}