import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentBlueColorType } from '../../tailwind_map_type/interactivity/accent_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentBlueColor]',
    standalone: true
})
export class AccentBlueColorDirective extends BaseTailwindDirective {
  accentBlueColor = input<AccentBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_BLUE_COLOR: this.accentBlueColor(),
      });
    });
  }
}