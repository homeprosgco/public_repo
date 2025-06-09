import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { AccentFuchsiaColorType } from '../../tailwind_map_type/interactivity/accent_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[accentFuchsiaColor]',
    standalone: true
})
export class AccentFuchsiaColorDirective extends BaseTailwindDirective {
  accentFuchsiaColor = input<AccentFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ACCENT_FUCHSIA_COLOR: this.accentFuchsiaColor(),
      });
    });
  }
}