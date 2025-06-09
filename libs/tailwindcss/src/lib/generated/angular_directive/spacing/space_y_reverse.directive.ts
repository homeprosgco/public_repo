import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { SpaceYReverseType } from '../../tailwind_map_type/spacing/space_y_reverse_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[spaceYReverse]',
    standalone: true
})
export class SpaceYReverseDirective extends BaseTailwindDirective {
  spaceYReverse = input<SpaceYReverseType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SPACE_Y_REVERSE: this.spaceYReverse(),
      });
    });
  }
}