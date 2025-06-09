import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentEmeraldColorType } from '../../tailwind_map_type/interactivity/accent_emerald_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentEmeraldColor]',
    standalone: true
})
export class AccentEmeraldColorDirective extends BaseTailwindDirective {
  accentEmeraldColor = input<AccentEmeraldColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_EMERALD_COLOR: this.accentEmeraldColor(),
      });
    });
  }
}