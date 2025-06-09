import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundColorType } from '../../tailwind_map_type/backgrounds/background_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundColor]',
    standalone: true
})
export class BackgroundColorDirective extends BaseTailwindDirective {
  backgroundColor = input<BackgroundColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_COLOR: this.backgroundColor(),
      });
    });
  }
}