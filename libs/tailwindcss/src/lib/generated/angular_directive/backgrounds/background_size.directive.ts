import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundSizeType } from '../../tailwind_map_type/backgrounds/background_size_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundSize]',
    standalone: true
})
export class BackgroundSizeDirective extends BaseTailwindDirective {
  backgroundSize = input<BackgroundSizeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_SIZE: this.backgroundSize(),
      });
    });
  }
}