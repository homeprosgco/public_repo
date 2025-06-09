import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BackgroundPositionType } from '../../tailwind_map_type/backgrounds/background_position_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[backgroundPosition]',
    standalone: true
})
export class BackgroundPositionDirective extends BaseTailwindDirective {
  backgroundPosition = input<BackgroundPositionType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BACKGROUND_POSITION: this.backgroundPosition(),
      });
    });
  }
}