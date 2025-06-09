import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { PositionType } from '../../tailwind_map_type/layout/position_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[position]',
    standalone: true
})
export class PositionDirective extends BaseTailwindDirective {
  position = input<PositionType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        POSITION: this.position(),
      });
    });
  }
}