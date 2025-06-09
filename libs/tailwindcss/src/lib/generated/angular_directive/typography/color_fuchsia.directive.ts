import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorFuchsiaType } from '../../tailwind_map_type/typography/color_fuchsia_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorFuchsia]',
    standalone: true
})
export class ColorFuchsiaDirective extends BaseTailwindDirective {
  colorFuchsia = input<ColorFuchsiaType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_FUCHSIA: this.colorFuchsia(),
      });
    });
  }
}