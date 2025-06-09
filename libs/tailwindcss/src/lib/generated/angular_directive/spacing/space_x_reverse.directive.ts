import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { SpaceXReverseType } from '../../tailwind_map_type/spacing/space_x_reverse_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[spaceXReverse]',
    standalone: true
})
export class SpaceXReverseDirective extends BaseTailwindDirective {
  spaceXReverse = input<SpaceXReverseType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SPACE_X_REVERSE: this.spaceXReverse(),
      });
    });
  }
}