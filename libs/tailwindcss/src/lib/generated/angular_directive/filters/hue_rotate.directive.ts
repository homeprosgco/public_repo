import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { HueRotateType } from '../../tailwind_map_type/filters/hue_rotate_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[hueRotate]',
    standalone: true
})
export class HueRotateDirective extends BaseTailwindDirective {
  hueRotate = input<HueRotateType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        HUE_ROTATE: this.hueRotate(),
      });
    });
  }
}