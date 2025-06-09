import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundFuchsiaColorType } from '../../tailwind_map_type/backgrounds/background_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundFuchsiaColor]',
    standalone: true
})
export class BackgroundFuchsiaColorDirective extends BaseTailwindDirective {
  backgroundFuchsiaColor = input<BackgroundFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_FUCHSIA_COLOR: this.backgroundFuchsiaColor(),
      });
    });
  }
}