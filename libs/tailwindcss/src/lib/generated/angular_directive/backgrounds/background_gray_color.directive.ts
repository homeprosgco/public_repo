import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundGrayColorType } from '../../tailwind_map_type/backgrounds/background_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundGrayColor]',
    standalone: true
})
export class BackgroundGrayColorDirective extends BaseTailwindDirective {
  backgroundGrayColor = input<BackgroundGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_GRAY_COLOR: this.backgroundGrayColor(),
      });
    });
  }
}