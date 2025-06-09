import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundRoseColorType } from '../../tailwind_map_type/backgrounds/background_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundRoseColor]',
    standalone: true
})
export class BackgroundRoseColorDirective extends BaseTailwindDirective {
  backgroundRoseColor = input<BackgroundRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_ROSE_COLOR: this.backgroundRoseColor(),
      });
    });
  }
}