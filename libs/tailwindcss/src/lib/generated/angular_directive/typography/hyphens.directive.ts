import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { HyphensType } from '../../tailwind_map_type/typography/hyphens_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[hyphens]',
    standalone: true
})
export class HyphensDirective extends BaseTailwindDirective {
  hyphens = input<HyphensType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        HYPHENS: this.hyphens(),
      });
    });
  }
}