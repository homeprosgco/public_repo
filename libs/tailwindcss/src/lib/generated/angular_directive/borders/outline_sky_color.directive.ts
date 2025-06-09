import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineSkyColorType } from '../../tailwind_map_type/borders/outline_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineSkyColor]',
    standalone: true
})
export class OutlineSkyColorDirective extends BaseTailwindDirective {
  outlineSkyColor = input<OutlineSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_SKY_COLOR: this.outlineSkyColor(),
      });
    });
  }
}