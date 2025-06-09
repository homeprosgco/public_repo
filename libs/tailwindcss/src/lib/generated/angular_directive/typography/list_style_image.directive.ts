import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ListStyleImageType } from '../../tailwind_map_type/typography/list_style_image_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[listStyleImage]',
    standalone: true
})
export class ListStyleImageDirective extends BaseTailwindDirective {
  listStyleImage = input<ListStyleImageType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        LIST_STYLE_IMAGE: this.listStyleImage(),
      });
    });
  }
}