import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundIndigoColorType } from '../../tailwind_map_type/backgrounds/background_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundIndigoColor]',
    standalone: true
})
export class BackgroundIndigoColorDirective extends BaseTailwindDirective {
  backgroundIndigoColor = input<BackgroundIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_INDIGO_COLOR: this.backgroundIndigoColor(),
      });
    });
  }
}