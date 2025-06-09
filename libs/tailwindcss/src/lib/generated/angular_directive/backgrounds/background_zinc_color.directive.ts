import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundZincColorType } from '../../tailwind_map_type/backgrounds/background_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundZincColor]',
    standalone: true
})
export class BackgroundZincColorDirective extends BaseTailwindDirective {
  backgroundZincColor = input<BackgroundZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_ZINC_COLOR: this.backgroundZincColor(),
      });
    });
  }
}