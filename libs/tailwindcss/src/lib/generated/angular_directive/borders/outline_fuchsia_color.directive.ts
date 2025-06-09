import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OutlineFuchsiaColorType } from '../../tailwind_map_type/borders/outline_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[outlineFuchsiaColor]',
    standalone: true
})
export class OutlineFuchsiaColorDirective extends BaseTailwindDirective {
  outlineFuchsiaColor = input<OutlineFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OUTLINE_FUCHSIA_COLOR: this.outlineFuchsiaColor(),
      });
    });
  }
}