import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundTealColorType } from '../../tailwind_map_type/backgrounds/background_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundTealColor]',
    standalone: true
})
export class BackgroundTealColorDirective extends BaseTailwindDirective {
  backgroundTealColor = input<BackgroundTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_TEAL_COLOR: this.backgroundTealColor(),
      });
    });
  }
}