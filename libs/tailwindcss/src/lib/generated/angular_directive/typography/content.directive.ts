import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ContentType } from '../../tailwind_map_type/typography/content_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[content]',
    standalone: true
})
export class ContentDirective extends BaseTailwindDirective {
  content = input<ContentType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        CONTENT: this.content(),
      });
    });
  }
}