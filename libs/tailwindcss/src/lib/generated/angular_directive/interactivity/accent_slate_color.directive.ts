import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentSlateColorType } from '../../tailwind_map_type/interactivity/accent_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentSlateColor]',
    standalone: true
})
export class AccentSlateColorDirective extends BaseTailwindDirective {
  accentSlateColor = input<AccentSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_SLATE_COLOR: this.accentSlateColor(),
      });
    });
  }
}