import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { DisplayType } from '../../tailwind_map_type/layout/display_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[display]',
    standalone: true
})
export class DisplayDirective extends BaseTailwindDirective {
  display = input<DisplayType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        DISPLAY: this.display(),
      });
    });
  }
}