import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { TransformOriginType } from '../../tailwind_map_type/transforms/transform_origin_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[transformOrigin]',
    standalone: true
})
export class TransformOriginDirective extends BaseTailwindDirective {
  transformOrigin = input<TransformOriginType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        TRANSFORM_ORIGIN: this.transformOrigin(),
      });
    });
  }
}