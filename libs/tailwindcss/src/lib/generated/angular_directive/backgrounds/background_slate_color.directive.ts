import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundSlateColorType } from '../../tailwind_map_type/backgrounds/background_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundSlateColor]',
    standalone: true
})
export class BackgroundSlateColorDirective extends BaseTailwindDirective {
  backgroundSlateColor = input<BackgroundSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_SLATE_COLOR: this.backgroundSlateColor(),
      });
    });
  }
}