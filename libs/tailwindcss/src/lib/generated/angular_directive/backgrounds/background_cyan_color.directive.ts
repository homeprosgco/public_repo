import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundCyanColorType } from '../../tailwind_map_type/backgrounds/background_cyan_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundCyanColor]',
    standalone: true
})
export class BackgroundCyanColorDirective extends BaseTailwindDirective {
  backgroundCyanColor = input<BackgroundCyanColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_CYAN_COLOR: this.backgroundCyanColor(),
      });
    });
  }
}