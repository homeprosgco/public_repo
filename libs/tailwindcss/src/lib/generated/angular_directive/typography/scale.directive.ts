import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScaleType } from '../../tailwind_map_type/typography/scale_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scale]',
    standalone: true
})
export class ScaleDirective extends BaseTailwindDirective {
  scale = input<ScaleType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCALE: this.scale(),
      });
    });
  }
}