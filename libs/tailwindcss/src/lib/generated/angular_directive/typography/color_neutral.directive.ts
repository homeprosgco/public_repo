import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColorNeutralType } from '../../tailwind_map_type/typography/color_neutral_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[colorNeutral]',
    standalone: true
})
export class ColorNeutralDirective extends BaseTailwindDirective {
  colorNeutral = input<ColorNeutralType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLOR_NEUTRAL: this.colorNeutral(),
      });
    });
  }
}