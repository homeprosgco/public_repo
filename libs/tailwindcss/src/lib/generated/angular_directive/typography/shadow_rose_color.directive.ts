import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowRoseColorType } from '../../tailwind_map_type/typography/shadow_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowRoseColor]',
    standalone: true
})
export class ShadowRoseColorDirective extends BaseTailwindDirective {
  shadowRoseColor = input<ShadowRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_ROSE_COLOR: this.shadowRoseColor(),
      });
    });
  }
}