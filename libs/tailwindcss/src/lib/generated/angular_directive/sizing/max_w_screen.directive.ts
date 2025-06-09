import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MaxWScreenType } from '../../tailwind_map_type/sizing/max_w_screen_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[maxWScreen]',
    standalone: true
})
export class MaxWScreenDirective extends BaseTailwindDirective {
  maxWScreen = input<MaxWScreenType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MAX_W_SCREEN: this.maxWScreen(),
      });
    });
  }
}