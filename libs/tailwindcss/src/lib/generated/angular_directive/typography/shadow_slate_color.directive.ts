import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowSlateColorType } from '../../tailwind_map_type/typography/shadow_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowSlateColor]',
    standalone: true
})
export class ShadowSlateColorDirective extends BaseTailwindDirective {
  shadowSlateColor = input<ShadowSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_SLATE_COLOR: this.shadowSlateColor(),
      });
    });
  }
}