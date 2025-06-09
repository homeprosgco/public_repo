import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ObjectFitType } from '../../tailwind_map_type/layout/object_fit_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[objectFit]',
    standalone: true
})
export class ObjectFitDirective extends BaseTailwindDirective {
  objectFit = input<ObjectFitType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OBJECT_FIT: this.objectFit(),
      });
    });
  }
}