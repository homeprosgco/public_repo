import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundGreenColorType } from '../../tailwind_map_type/backgrounds/background_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundGreenColor]',
    standalone: true
})
export class BackgroundGreenColorDirective extends BaseTailwindDirective {
  backgroundGreenColor = input<BackgroundGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_GREEN_COLOR: this.backgroundGreenColor(),
      });
    });
  }
}