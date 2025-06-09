import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorLimeType } from '../../tailwind_map_type/typography/color_lime_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorLime]',
    standalone: true
})
export class ColorLimeDirective extends BaseTailwindDirective {
  colorLime = input<ColorLimeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_LIME: this.colorLime(),
      });
    });
  }
}