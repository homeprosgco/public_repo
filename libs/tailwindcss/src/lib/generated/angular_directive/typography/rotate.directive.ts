import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RotateType } from '../../tailwind_map_type/typography/rotate_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[rotate]',
    standalone: true
})
export class RotateDirective extends BaseTailwindDirective {
  rotate = input<RotateType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ROTATE: this.rotate(),
      });
    });
  }
}