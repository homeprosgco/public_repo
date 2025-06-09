import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundNeutralColorType } from '../../tailwind_map_type/backgrounds/background_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundNeutralColor]',
    standalone: true
})
export class BackgroundNeutralColorDirective extends BaseTailwindDirective {
  backgroundNeutralColor = input<BackgroundNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_NEUTRAL_COLOR: this.backgroundNeutralColor(),
      });
    });
  }
}