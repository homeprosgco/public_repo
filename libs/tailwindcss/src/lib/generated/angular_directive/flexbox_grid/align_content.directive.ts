import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AlignContentType } from '../../tailwind_map_type/flexbox_grid/align_content_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[alignContent]',
    standalone: true
})
export class AlignContentDirective extends BaseTailwindDirective {
  alignContent = input<AlignContentType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ALIGN_CONTENT: this.alignContent(),
      });
    });
  }
}