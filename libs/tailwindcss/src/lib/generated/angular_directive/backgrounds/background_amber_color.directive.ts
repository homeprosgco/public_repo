import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundAmberColorType } from '../../tailwind_map_type/backgrounds/background_amber_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundAmberColor]',
    standalone: true
})
export class BackgroundAmberColorDirective extends BaseTailwindDirective {
  backgroundAmberColor = input<BackgroundAmberColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_AMBER_COLOR: this.backgroundAmberColor(),
      });
    });
  }
}