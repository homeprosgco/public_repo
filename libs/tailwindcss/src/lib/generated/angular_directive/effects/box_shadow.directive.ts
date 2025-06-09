import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BoxShadowType } from '../../tailwind_map_type/effects/box_shadow_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[boxShadow]',
    standalone: true
})
export class BoxShadowDirective extends BaseTailwindDirective {
  boxShadow = input<BoxShadowType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BOX_SHADOW: this.boxShadow(),
      });
    });
  }
}