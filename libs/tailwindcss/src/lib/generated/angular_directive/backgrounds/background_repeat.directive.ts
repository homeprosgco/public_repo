import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundRepeatType } from '../../tailwind_map_type/backgrounds/background_repeat_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundRepeat]',
    standalone: true
})
export class BackgroundRepeatDirective extends BaseTailwindDirective {
  backgroundRepeat = input<BackgroundRepeatType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_REPEAT: this.backgroundRepeat(),
      });
    });
  }
}