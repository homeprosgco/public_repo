import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { JustifyContentType } from '../../tailwind_map_type/flexbox_grid/justify_content_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[justifyContent]',
    standalone: true
})
export class JustifyContentDirective extends BaseTailwindDirective {
  justifyContent = input<JustifyContentType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        JUSTIFY_CONTENT: this.justifyContent(),
      });
    });
  }
}