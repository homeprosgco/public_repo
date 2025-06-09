import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundPurpleColorType } from '../../tailwind_map_type/backgrounds/background_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundPurpleColor]',
    standalone: true
})
export class BackgroundPurpleColorDirective extends BaseTailwindDirective {
  backgroundPurpleColor = input<BackgroundPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_PURPLE_COLOR: this.backgroundPurpleColor(),
      });
    });
  }
}