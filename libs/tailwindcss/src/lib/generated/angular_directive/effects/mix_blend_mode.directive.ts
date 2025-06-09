import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MixBlendModeType } from '../../tailwind_map_type/effects/mix_blend_mode_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[mixBlendMode]',
    standalone: true
})
export class MixBlendModeDirective extends BaseTailwindDirective {
  mixBlendMode = input<MixBlendModeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MIX_BLEND_MODE: this.mixBlendMode(),
      });
    });
  }
}