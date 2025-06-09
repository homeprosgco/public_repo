import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundYellowColorType } from '../../tailwind_map_type/backgrounds/background_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundYellowColor]',
    standalone: true
})
export class BackgroundYellowColorDirective extends BaseTailwindDirective {
  backgroundYellowColor = input<BackgroundYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_YELLOW_COLOR: this.backgroundYellowColor(),
      });
    });
  }
}