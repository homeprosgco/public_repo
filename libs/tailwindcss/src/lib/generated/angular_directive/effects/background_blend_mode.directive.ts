import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundBlendModeType } from '../../tailwind_map_type/effects/background_blend_mode_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundBlendMode]',
    standalone: true
})
export class BackgroundBlendModeDirective extends BaseTailwindDirective {
  backgroundBlendMode = input<BackgroundBlendModeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_BLEND_MODE: this.backgroundBlendMode(),
      });
    });
  }
}