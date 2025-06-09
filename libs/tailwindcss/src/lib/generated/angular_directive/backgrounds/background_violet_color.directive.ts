import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundVioletColorType } from '../../tailwind_map_type/backgrounds/background_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundVioletColor]',
    standalone: true
})
export class BackgroundVioletColorDirective extends BaseTailwindDirective {
  backgroundVioletColor = input<BackgroundVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_VIOLET_COLOR: this.backgroundVioletColor(),
      });
    });
  }
}