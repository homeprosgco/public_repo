import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundOrangeColorType } from '../../tailwind_map_type/backgrounds/background_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundOrangeColor]',
    standalone: true
})
export class BackgroundOrangeColorDirective extends BaseTailwindDirective {
  backgroundOrangeColor = input<BackgroundOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_ORANGE_COLOR: this.backgroundOrangeColor(),
      });
    });
  }
}