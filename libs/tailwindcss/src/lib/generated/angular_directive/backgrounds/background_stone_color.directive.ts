import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundStoneColorType } from '../../tailwind_map_type/backgrounds/background_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundStoneColor]',
    standalone: true
})
export class BackgroundStoneColorDirective extends BaseTailwindDirective {
  backgroundStoneColor = input<BackgroundStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_STONE_COLOR: this.backgroundStoneColor(),
      });
    });
  }
}