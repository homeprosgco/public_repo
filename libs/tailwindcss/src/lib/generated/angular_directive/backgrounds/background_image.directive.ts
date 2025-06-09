import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundImageType } from '../../tailwind_map_type/backgrounds/background_image_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundImage]',
    standalone: true
})
export class BackgroundImageDirective extends BaseTailwindDirective {
  backgroundImage = input<BackgroundImageType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_IMAGE: this.backgroundImage(),
      });
    });
  }
}