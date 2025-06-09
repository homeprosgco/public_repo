import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundBlueColorType } from '../../tailwind_map_type/backgrounds/background_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundBlueColor]',
    standalone: true
})
export class BackgroundBlueColorDirective extends BaseTailwindDirective {
  backgroundBlueColor = input<BackgroundBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_BLUE_COLOR: this.backgroundBlueColor(),
      });
    });
  }
}