import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ShadowFuchsiaColorType } from '../../tailwind_map_type/typography/shadow_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[shadowFuchsiaColor]',
    standalone: true
})
export class ShadowFuchsiaColorDirective extends BaseTailwindDirective {
  shadowFuchsiaColor = input<ShadowFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SHADOW_FUCHSIA_COLOR: this.shadowFuchsiaColor(),
      });
    });
  }
}