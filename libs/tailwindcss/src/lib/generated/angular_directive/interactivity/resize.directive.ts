import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ResizeType } from '../../tailwind_map_type/interactivity/resize_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[resize]',
    standalone: true
})
export class ResizeDirective extends BaseTailwindDirective {
  resize = input<ResizeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RESIZE: this.resize(),
      });
    });
  }
}