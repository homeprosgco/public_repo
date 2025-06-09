import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundClipType } from '../../tailwind_map_type/backgrounds/background_clip_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundClip]',
    standalone: true
})
export class BackgroundClipDirective extends BaseTailwindDirective {
  backgroundClip = input<BackgroundClipType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_CLIP: this.backgroundClip(),
      });
    });
  }
}