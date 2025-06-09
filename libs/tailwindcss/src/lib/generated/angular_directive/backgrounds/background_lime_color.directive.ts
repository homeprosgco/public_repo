import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundLimeColorType } from '../../tailwind_map_type/backgrounds/background_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundLimeColor]',
    standalone: true
})
export class BackgroundLimeColorDirective extends BaseTailwindDirective {
  backgroundLimeColor = input<BackgroundLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_LIME_COLOR: this.backgroundLimeColor(),
      });
    });
  }
}