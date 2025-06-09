import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowEmeraldColorType } from '../../tailwind_map_type/typography/shadow_emerald_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowEmeraldColor]',
    standalone: true
})
export class ShadowEmeraldColorDirective extends BaseTailwindDirective {
  shadowEmeraldColor = input<ShadowEmeraldColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_EMERALD_COLOR: this.shadowEmeraldColor(),
      });
    });
  }
}