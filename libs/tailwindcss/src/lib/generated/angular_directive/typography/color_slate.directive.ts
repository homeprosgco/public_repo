import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorSlateType } from '../../tailwind_map_type/typography/color_slate_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorSlate]',
    standalone: true
})
export class ColorSlateDirective extends BaseTailwindDirective {
  colorSlate = input<ColorSlateType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_SLATE: this.colorSlate(),
      });
    });
  }
}