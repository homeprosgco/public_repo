import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundPinkColorType } from '../../tailwind_map_type/backgrounds/background_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundPinkColor]',
    standalone: true
})
export class BackgroundPinkColorDirective extends BaseTailwindDirective {
  backgroundPinkColor = input<BackgroundPinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_PINK_COLOR: this.backgroundPinkColor(),
      });
    });
  }
}