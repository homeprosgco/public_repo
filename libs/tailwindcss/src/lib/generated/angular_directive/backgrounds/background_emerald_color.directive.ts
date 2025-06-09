import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundEmeraldColorType } from '../../tailwind_map_type/backgrounds/background_emerald_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundEmeraldColor]',
    standalone: true
})
export class BackgroundEmeraldColorDirective extends BaseTailwindDirective {
  backgroundEmeraldColor = input<BackgroundEmeraldColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_EMERALD_COLOR: this.backgroundEmeraldColor(),
      });
    });
  }
}